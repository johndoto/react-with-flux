"use strict";

var React =         require("react");
var Link =          require("react-router").Link;
var toastr =        require("toastr");
var AuthorActions = require("../../actions/authorActions");

var AuthorsList = React.createClass({
    propTypes: {
        authors: React.PropTypes.array.isRequired
    },
    deleteAuthor: function(id, event) {
        event.preventDefault();
        event.stopPropagation();
        AuthorActions.deleteAuthor(id);
        toastr.success("Author deleted.");
    },
    render: function() {
        var createAuthorRow = function(author) {
            return (
                <tr key={author.id}>
                    <td><Link to="editAuthor" params={{id: author.id}}>{author.id}</Link></td>
                    <td>{author.lastName}</td>
                    <td>{author.firstName}</td>
                    <td>
                        <a href="#" className="btn btn-danger"
                           onClick={this.deleteAuthor.bind(this, author.id)}>Delete</a>
                    </td>
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
                            <th>&nbsp;</th>
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
