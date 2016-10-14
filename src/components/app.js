/* eslint-disable strict */
// disable lint check because we need global jQuery variable

var React =         require("react");
var RouteHandler =  require("react-router").RouteHandler;
var Header =        require("./common/header");
$ = jQuery =        require("jquery");

var App = React.createClass({
    render: function() {
        return (
            <div>
                <Header />
                <RouteHandler />
            </div>
        );
    }
});

module.exports = App;
