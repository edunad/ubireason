'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Api$Ubireason = require("../../modules/Api.bs.js");

var state = {
  extraData: undefined
};

function reducer(state, action) {
  return {
          extraData: action[0]
        };
}

function Player(Props) {
  var id = Props.id;
  var name = Props.name;
  var level = Props.level;
  var match = React.useReducer(reducer, state);
  var dispatch = match[1];
  var match$1 = match[0].extraData;
  var tmp;
  if (match$1 !== undefined) {
    var bullets = String(match$1.kills);
    tmp = React.createElement("div", undefined, bullets);
  } else {
    tmp = React.createElement("button", {
          onClick: (function (param) {
              Api$Ubireason.Api.getPlayerThunt(id).then((function (results) {
                      Curry._1(dispatch, /* UpdateExtraData */[results]);
                      return Promise.resolve(/* () */0);
                    }));
              return /* () */0;
            })
        }, "Get info");
  }
  return React.createElement("div", undefined, React.createElement("div", undefined, name), React.createElement("img", {
                  src: "https://ubisoft-avatars.akamaized.net/" + (String(id) + "/default_256_256.png")
                }), React.createElement("div", undefined, level), tmp);
}

var make = Player;

exports.state = state;
exports.reducer = reducer;
exports.make = make;
/* react Not a pure module */
