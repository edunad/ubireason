'use strict';

var Json = require("@glennsl/bs-json/src/Json.bs.js");
var List = require("bs-platform/lib/js/list.js");
var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

function decodePlayerInfo(param) {
  return Json_decode.field("results", (function (param) {
                return Json_decode.list((function (param) {
                              return Json_decode.optional((function (json) {
                                            return {
                                                    id: Json_decode.field("p_id", Json_decode.string, json),
                                                    name: Json_decode.field("p_name", Json_decode.string, json),
                                                    level: Json_decode.field("p_level", Json_decode.$$int, json)
                                                  };
                                          }), param);
                            }), param);
              }), param);
}

function decodePlayerData(json) {
  return {
          rawThunt: Json_decode.field("thunt", Json_decode.string, json)
        };
}

function decodePlayerThunt(json) {
  return {
          kills: Json_decode.field("kills", Json_decode.$$int, json),
          deaths: Json_decode.field("deaths", Json_decode.$$int, json),
          wins: Json_decode.field("wins", Json_decode.$$int, json),
          losses: Json_decode.field("losses", Json_decode.$$int, json),
          melees: Json_decode.field("melees", Json_decode.$$int, json),
          played: Json_decode.field("played", Json_decode.$$int, json),
          bullets: Json_decode.field("bullets", Json_decode.$$int, json),
          headshots: Json_decode.field("headshots", Json_decode.$$int, json)
        };
}

function getPlayerThunt(guid) {
  return fetch("https://r6tab.com/api/player.php?p_id=" + guid).then((function (response) {
                    return response.json();
                  })).then((function (json) {
                  return Promise.resolve(decodePlayerData(json));
                })).then((function (data) {
                return Promise.resolve(decodePlayerThunt(Json.parseOrRaise(data.rawThunt)));
              }));
}

function searchPlayer(name) {
  return fetch("https://r6tab.com/api/search.php?platform=uplay&search=" + name).then((function (response) {
                    return response.json();
                  })).then((function (json) {
                  return Promise.resolve(decodePlayerInfo(json));
                })).then((function (results) {
                return Promise.resolve(List.map((function (item) {
                                  if (item !== undefined) {
                                    return item;
                                  } else {
                                    throw [
                                          Caml_builtin_exceptions.match_failure,
                                          /* tuple */[
                                            "Api.re",
                                            71,
                                            20
                                          ]
                                        ];
                                  }
                                }), results));
              }));
}

var Api = {
  decodePlayerInfo: decodePlayerInfo,
  decodePlayerData: decodePlayerData,
  decodePlayerThunt: decodePlayerThunt,
  getPlayerThunt: getPlayerThunt,
  searchPlayer: searchPlayer
};

exports.Api = Api;
/* No side effect */
