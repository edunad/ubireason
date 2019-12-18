'use strict';

var React = require("react");
var ReactDOMRe = require("reason-react/src/ReactDOMRe.js");
var App$Ubireason = require("./components/app/App.bs.js");

ReactDOMRe.renderToElementWithId(React.createElement(App$Ubireason.make, { }), "app");

/*  Not a pure module */
