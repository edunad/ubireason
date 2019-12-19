'use strict';

var React = require("react");
var PlayerStyles$Ubireason = require("../../modules/PlayerStyles.bs.js");

function Info(Props) {
  var name = Props.name;
  var value = Props.value;
  return React.createElement("div", {
              className: PlayerStyles$Ubireason.PlayerStyles.extraInfo
            }, React.createElement("div", undefined, name), React.createElement("div", undefined, String(value)));
}

var make = Info;

exports.make = make;
/* react Not a pure module */
