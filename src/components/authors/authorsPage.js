"use strict";

var React =         require("react");
var AuthorApi =     require("../../api/authorApi");
var AuthorsList =    require("./authorsList");

var AuthorsPage = React.createClass({
    getInitialState: function() {
        return {
            authors: []
        };
    },
    componentDidMount: function() {
        if (this.isMounted()) {
            this.setState({ authors: AuthorApi.getAllAuthors() });
        }
    },
    render: function() {
        return (
            <div className="container">
                <h1>Authors</h1>
                <AuthorsList authors={this.state.authors} />
            </div>
        );
    }
});

module.exports = AuthorsPage;

