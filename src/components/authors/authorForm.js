"use strict";

var React =     require("react");
var Link =      require("react-router").Link;
var TextInput = require("../common/textInput");

var AuthorForm = React.createClass({
    propTypes: {
        author: React.PropTypes.object.isRequired,
        onSave: React.PropTypes.func.isRequired,
        onChange: React.PropTypes.func.isRequired,
        errors: React.PropTypes.object
    },
    render: function() {
        return (
            <form>
                <TextInput
                    name="firstName"
                    label="First Name"
                    placeholder="First Name"
                    value={this.props.author.firstName}
                    error={this.props.errors.firstName}
                    onChange={this.props.onChange} />

                <TextInput
                    name="lastName"
                    label="Last Name"
                    placeholder="Last Name"
                    value={this.props.author.lastName}
                    error={this.props.errors.lastName}
                    onChange={this.props.onChange} />

                <div className="form-group">
                    <input type="submit" className="btn btn-primary"
                           value="Save" onClick={this.props.onSave} />
                    <Link to="authors" className="btn btn-default">Cancel</Link>
                </div>

            </form>
        );
    }
});

module.exports = AuthorForm;
