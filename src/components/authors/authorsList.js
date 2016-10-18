"use strict";

var React = require("react");
var Link = require("react-router").Link;

var AuthorsList = React.createClass({
    propTypes: {
        authors: React.PropTypes.array.isRequired
    },
    render: function() {
        var createAuthorRow = function(author) {
            return (
                <tr key={author.id}>
                    <td><Link to="editAuthor" params={{id: author.id}}>{author.id}</Link></td>
                    <td>{author.lastName}</td>
                    <td>{author.firstName}</td>
                </tr>
            );
        };
        return (
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Last Name</th>
                            <th>First Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.authors.map(createAuthorRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = AuthorsList;

