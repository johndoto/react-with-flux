"use strict";

var React = require("react");
var Link = require("react-router").Link;

var HomePage = React.createClass({
    render: function() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1>
                        Pluralsight Administration
                    </h1>
                    <p>
                        React, React Router, and Flux for ultra-responsive web apps.
                    </p>
                    <p>
                        <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
                    </p>
                </div>
            </div>
        );
    }
});

module.exports = HomePage;
