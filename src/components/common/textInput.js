"use strict";

var React = require("react");

var TextInput = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        label: React.PropTypes.string.isRequired,
        onChange: React.PropTypes.func.isRequired,
        placeholder: React.PropTypes.string,
        autoFocus: React.PropTypes.bool,
        value: React.PropTypes.string,
        error: React.PropTypes.string
    },
    render: function() {
        var wrapperClass = "form-group";
        if (this.props.error && this.props.error.length > 0) {
            wrapperClass += " " + "has-error";
        }
        return (
            <div className={wrapperClass}>
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <div className="field">
                    <input type="text"
                        className="form-control"
                        name={this.props.name}
                        ref={this.props.name}
                        onChange={this.props.onChange}
                        placeholder={this.props.placeholder}
                        autoFocus={this.props.autoFocus}
                        value={this.props.value} />
                </div>
                <div className="alert alert-danger" role="alert">
                    <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                    <span className="sr-only">Error:</span>
                    {this.props.error}
                </div>
            </div>
        );
    }
});

module.exports = TextInput;
