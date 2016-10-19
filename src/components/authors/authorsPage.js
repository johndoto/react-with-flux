"use strict";

var React =         require("react");
var Link =          require("react-router").Link;
var AuthorsList =   require("./authorsList");
var AuthorActions = require("../../actions/authorActions");
var AuthorStore =   require("../../stores/authorStore");

var AuthorsPage = React.createClass({
    getInitialState: function() {
        return {
            authors: AuthorStore.getAllAuthors()
        };
    },
    componentWillMount: function() {
        AuthorStore.addChangeListener(this.onChange);
    },
    componentWillUnmount: function() {
        AuthorStore.removeChangeListener(this.onChange);
    },
    onChange: function() {
        this.setState({ authors: AuthorStore.getAllAuthors() });
    },
    render: function() {
        return (
            <div className="container">
                <h1>
                    Authors
                </h1>
                <p>
                    <Link to="addAuthor" className="btn btn-primary">Add Author</Link>
                </p>
                <AuthorsList authors={this.state.authors} />
            </div>
        );
    }
});

module.exports = AuthorsPage;
