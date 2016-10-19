"use strict";

var React =         require("react");
var Router =        require("react-router");
var Toastr =        require("toastr");
var AuthorForm =    require("./authorForm");
var AuthorActions = require("../../actions/authorActions");
var AuthorStore =   require("../../stores/authorStore");

var EditAuthorPage = React.createClass({
    mixins: [
        Router.Navigation
    ],
    statics: {
        willTransitionFrom: function(transition, component) {
            if (component.state.dirty && !confirm("Leave without saving?")) {
                transition.abort();
            }
        }
    },
    getInitialState: function() {
        return {
            author: { id: "", firstName: "", lastName: "" },
            errors: {},
            dirty: false
        };
    },
    componentWillMount: function() {
        // get the id from the URL path "/author/:id"
        var authorId = this.props.params.id;
        if (authorId) {
            this.setState({ author: AuthorStore.getAuthorById(authorId) });
        }
    },
    setAuthorState: function(event) {
        this.setState({ dirty: true });
        var field = event.target.name;
        var value = event.target.value;
        this.state.author[field] = value;
        return this.setState({ author: this.state.author });
    },
    authorFormIsValid: function() {
        var formIsValid = true;
        this.state.errors = {}; // clear previous errors

        if (this.state.author.firstName.length < 2) {
            this.state.errors.firstName = "First Name must be at least 2 characters.";
            formIsValid = false;
        }
        if (this.state.author.lastName.length < 2) {
            this.state.errors.lastName = "Last Name must be at least 2 characters.";
            formIsValid = false;
        }

        this.setState({ errors: this.state.errors });
        return formIsValid;
    },
    saveAuthor: function(event) {
        event.preventDefault();
        event.stopPropagation();

        if (!this.authorFormIsValid()) {
            // invalid form
            return;
        }

        if (this.state.author.id) {
            // author exists - update
            AuthorActions.updateAuthor(this.state.author);
            Toastr.success("Author updated.");
        } else {
            // author does not exist - create
            AuthorActions.createAuthor(this.state.author);
            Toastr.success("Author created.");
        }

        this.setState({ dirty: false });
        this.transitionTo("authors");
    },
    render: function() {
        return (
            <div className="container">
                <h1>
                    Edit Author
                </h1>
                <div className="row">
                    <div className="col-xs-12 col-sm-6">
                        <AuthorForm
                            author={this.state.author}
                            errors={this.state.errors}
                            onChange={this.setAuthorState}
                            onSave={this.saveAuthor} />
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = EditAuthorPage;
