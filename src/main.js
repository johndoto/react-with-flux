"use strict";

var React =             require("react");
var Router =            require("react-router");
var routes =            require("./routes");
var InitializeActions = require("./actions/initializeActions");

InitializeActions.initApp();

// HTML5 - pushState:
// Router.run(routes, Router.HistoryLocation, function(Handler) {

// use hash links:
Router.run(routes, function(Handler) {
    React.render(<Handler />, document.getElementById("app"));
});
