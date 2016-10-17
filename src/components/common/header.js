"use strict";

var React = require("react");
var Link = require("react-router").Link;

var Header = React.createClass({
    render: function() {
        return (
            <div className="navbar navbar-default">
                <div className="container">
                    <Link to="app" className="navbar-brand">
                        <img src="images/pluralsight-logo.png" alt="" />
                    </Link>
                    <ul className="nav navbar-nav">
                        <li><Link to="app">Home</Link></li>
                        <li><Link to="about">About</Link></li>
                        <li><Link to="authors">Authors</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
});

module.exports = Header;

