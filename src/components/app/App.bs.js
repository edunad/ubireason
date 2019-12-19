'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Api$Ubireason = require("../../modules/Api.bs.js");
var Player$Ubireason = require("../player/Player.bs.js");
var AppStyles$Ubireason = require("../../modules/AppStyles.bs.js");

var state = {
  input: "failcake",
  isLoading: false,
  players: /* [] */0
};

function reducer(state, action) {
  if (action.tag) {
    return {
            input: state.input,
            isLoading: state.isLoading,
            players: action[0]
          };
  } else {
    return {
            input: action[0],
            isLoading: state.isLoading,
            players: state.players
          };
  }
}

function App(Props) {
  var match = React.useReducer(reducer, state);
  var dispatch = match[1];
  var state$1 = match[0];
  var match$1 = state$1.isLoading;
  return React.createElement("div", {
              className: AppStyles$Ubireason.AppStyles.main
            }, React.createElement("img", {
                  className: AppStyles$Ubireason.AppStyles.logo,
                  src: "https://i.imgur.com/gNeWm5H.png"
                }), React.createElement("form", {
                  className: AppStyles$Ubireason.AppStyles.form,
                  onSubmit: (function (ev) {
                      ev.preventDefault();
                      console.log("Searching players " + state$1.input);
                      Api$Ubireason.Api.searchPlayer(state$1.input).then((function (results) {
                              Curry._1(dispatch, /* UpdatePlayers */Block.__(1, [results]));
                              return Promise.resolve(/* () */0);
                            }));
                      return /* () */0;
                    })
                }, React.createElement("input", {
                      className: AppStyles$Ubireason.AppStyles.formInput,
                      id: "search",
                      name: "search",
                      placeholder: "Player name",
                      value: state$1.input,
                      onChange: (function (ev) {
                          var value = ev.target.value;
                          return Curry._1(dispatch, /* UpdateInput */Block.__(0, [value]));
                        })
                    }), React.createElement("button", {
                      className: AppStyles$Ubireason.AppStyles.formButton,
                      style: {
                        cursor: "pointer",
                        fontVariant: "all-petite-caps"
                      },
                      type: "submit"
                    }, "Search Players")), React.createElement("div", {
                  className: AppStyles$Ubireason.AppStyles.playerContainer
                }, React.createElement("div", {
                      className: AppStyles$Ubireason.AppStyles.playerCount
                    }, "Found " + (String(List.length(state$1.players)) + " players")), match$1 ? React.createElement("div", undefined, "Searching players...") : $$Array.map((function (param) {
                          var id = param.id;
                          var level = String(param.level);
                          return React.createElement(Player$Ubireason.make, {
                                      id: id,
                                      name: param.name,
                                      level: level,
                                      key: id
                                    });
                        }), $$Array.of_list(state$1.players))));
}

var make = App;

exports.state = state;
exports.reducer = reducer;
exports.make = make;
/* react Not a pure module */
