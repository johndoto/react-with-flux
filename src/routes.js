"use strict";

var React =         require("react");
var Router =        require("react-router");
var DefaultRoute =  Router.DefaultRoute;
var Route =         Router.Route;

var routes= (
    <Route name="app" path="/" handler={require("./components/app")}>
        <DefaultRoute          handler={require("./components/home/homePage")} />
        <Route name="about"    handler={require("./components/about/aboutPage")} />
        <Route name="authors"  handler={require("./components/authors/authorsPage")} />
    </Route>
);

module.exports = routes;
