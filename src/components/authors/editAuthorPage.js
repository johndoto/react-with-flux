"use strict";

var React =         require("react");
var Router =        require("react-router");
var Toastr =        require("toastr");
var AuthorForm =    require("./authorForm");
var AuthorApi =     require("../../api/authorApi");

var EditAuthorPage = React.createClass({
    mixins: [
        Router.Navigation
    ],
    getInitialState: function() {
        return {
            author: { id: "", firstName: "", lastName: "" },
            errors: {}
        };
    },
    setAuthorState: function(event) {
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
            return;
        }
        AuthorApi.saveAuthor(this.state.author);
        Toastr.success("Author saved.");
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

