"use strict";

var React =         require("react");
var Router =        require("react-router");
var DefaultRoute =  Router.DefaultRoute;
var Route =         Router.Route;
var Redirect =      Router.Redirect;
var NotFoundRoute = Router.NotFoundRoute;

var routes= (
    <Route name="app" path="/"                handler={require("./components/app")}>
        <DefaultRoute                         handler={require("./components/home/homePage")} />
        <NotFoundRoute                        handler={require("./components/error/notFoundPage")} />
        <Route name="about"                   handler={require("./components/about/aboutPage")} />
        <Route name="authors"                 handler={require("./components/authors/authorsPage")} />
        <Route name="addAuthor" path="author" handler={require("./components/authors/editAuthorPage")} />
        <Redirect from="about-us" to="about" />
        <Redirect from="about/*"  to="about" />
    </Route>
);

module.exports = routes;
