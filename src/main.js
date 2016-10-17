"use strict";

var React =  require("react");
var Router = require("react-router");
var routes = require("./routes");

// HTML5 - pushState:
// Router.run(routes, Router.HistoryLocation, function(Handler) {

// hash links:
Router.run(routes, function(Handler) {
    React.render(<Handler />, document.getElementById("app"));
});
