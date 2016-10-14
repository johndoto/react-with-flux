"use strict";

var React = require("react");

var HomePage = React.createClass({
    render: function() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1>Pluralsight Administration</h1>
                    <p>React, React Router, and Flux for ultra-responsive web apps.</p>
                </div>
            </div>
        );
    }
});

module.exports = HomePage;
