'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Api$Ubireason = require("../../modules/Api.bs.js");
var Info$Ubireason = require("../info/Info.bs.js");
var PlayerStyles$Ubireason = require("../../modules/PlayerStyles.bs.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

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
    var info = match$1;
    var match$2 = info.wins;
    var tmp$1;
    if (match$2 !== undefined) {
      tmp$1 = React.createElement(Info$Ubireason.make, {
            name: "Wins",
            value: match$2
          });
    } else {
      throw [
            Caml_builtin_exceptions.match_failure,
            /* tuple */[
              "Player.re",
              37,
              24
            ]
          ];
    }
    var match$3 = info.losses;
    var tmp$2;
    if (match$3 !== undefined) {
      tmp$2 = React.createElement(Info$Ubireason.make, {
            name: "Losses",
            value: match$3
          });
    } else {
      throw [
            Caml_builtin_exceptions.match_failure,
            /* tuple */[
              "Player.re",
              40,
              24
            ]
          ];
    }
    var match$4 = info.kills;
    var tmp$3;
    if (match$4 !== undefined) {
      tmp$3 = React.createElement(Info$Ubireason.make, {
            name: "Kills",
            value: match$4
          });
    } else {
      throw [
            Caml_builtin_exceptions.match_failure,
            /* tuple */[
              "Player.re",
              45,
              24
            ]
          ];
    }
    var match$5 = info.deaths;
    var tmp$4;
    if (match$5 !== undefined) {
      tmp$4 = React.createElement(Info$Ubireason.make, {
            name: "Deaths",
            value: match$5
          });
    } else {
      throw [
            Caml_builtin_exceptions.match_failure,
            /* tuple */[
              "Player.re",
              48,
              24
            ]
          ];
    }
    var match$6 = info.melees;
    var tmp$5;
    if (match$6 !== undefined) {
      tmp$5 = React.createElement(Info$Ubireason.make, {
            name: "Melees",
            value: match$6
          });
    } else {
      throw [
            Caml_builtin_exceptions.match_failure,
            /* tuple */[
              "Player.re",
              53,
              24
            ]
          ];
    }
    var match$7 = info.bullets;
    var tmp$6;
    if (match$7 !== undefined) {
      tmp$6 = React.createElement(Info$Ubireason.make, {
            name: "Bullets",
            value: match$7
          });
    } else {
      throw [
            Caml_builtin_exceptions.match_failure,
            /* tuple */[
              "Player.re",
              56,
              24
            ]
          ];
    }
    var match$8 = info.played;
    var tmp$7;
    if (match$8 !== undefined) {
      tmp$7 = React.createElement(Info$Ubireason.make, {
            name: "Played",
            value: match$8
          });
    } else {
      throw [
            Caml_builtin_exceptions.match_failure,
            /* tuple */[
              "Player.re",
              60,
              24
            ]
          ];
    }
    var match$9 = info.headshots;
    var tmp$8;
    if (match$9 !== undefined) {
      tmp$8 = React.createElement(Info$Ubireason.make, {
            name: "Headshots",
            value: match$9
          });
    } else {
      throw [
            Caml_builtin_exceptions.match_failure,
            /* tuple */[
              "Player.re",
              64,
              24
            ]
          ];
    }
    tmp = React.createElement("div", {
          className: PlayerStyles$Ubireason.PlayerStyles.extraInfoContainer
        }, tmp$1, tmp$2, tmp$3, tmp$4, tmp$5, tmp$6, tmp$7, tmp$8);
  } else {
    tmp = React.createElement("button", {
          className: PlayerStyles$Ubireason.PlayerStyles.extraInfoButton,
          style: {
            cursor: "pointer",
            fontVariant: "all-petite-caps"
          },
          onClick: (function (param) {
              Api$Ubireason.Api.getPlayerThunt(id).then((function (results) {
                      Curry._1(dispatch, /* UpdateExtraData */[results]);
                      return Promise.resolve(/* () */0);
                    }));
              return /* () */0;
            })
        }, "Load statistics");
  }
  return React.createElement("div", {
              className: PlayerStyles$Ubireason.PlayerStyles.main
            }, React.createElement("div", {
                  className: PlayerStyles$Ubireason.PlayerStyles.infoContainer
                }, React.createElement("img", {
                      className: PlayerStyles$Ubireason.PlayerStyles.avatar,
                      src: "https://ubisoft-avatars.akamaized.net/" + (String(id) + "/default_256_256.png")
                    }), React.createElement("div", {
                      className: PlayerStyles$Ubireason.PlayerStyles.username
                    }, name), React.createElement("div", {
                      className: PlayerStyles$Ubireason.PlayerStyles.level
                    }, "Level " + level)), tmp);
}

var make = Player;

exports.state = state;
exports.reducer = reducer;
exports.make = make;
/* react Not a pure module */
