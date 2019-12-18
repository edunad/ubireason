'use strict';

var Css = require("bs-css/src/Css.js");

var main = Css.style(/* :: */[
      Css.display(Css.flexBox),
      /* :: */[
        Css.flexDirection(Css.column),
        /* :: */[
          Css.width(/* `percent */[
                -119887163,
                100
              ]),
          /* :: */[
            Css.backgroundColor(Css.rgb(10, 10, 10)),
            /* :: */[
              Css.marginBottom(Css.px(10)),
              /* :: */[
                Css.borderBottom(Css.px(5), Css.solid, Css.rgb(41, 41, 41)),
                /* [] */0
              ]
            ]
          ]
        ]
      ]
    ]);

var infoContainer = Css.style(/* :: */[
      Css.display(Css.flexBox),
      /* :: */[
        Css.flexDirection(Css.row),
        /* [] */0
      ]
    ]);

var avatar = Css.style(/* :: */[
      Css.width(Css.px(50)),
      /* [] */0
    ]);

var username = Css.style(/* :: */[
      Css.color(Css.white),
      /* :: */[
        Css.fontSize(Css.px(20)),
        /* :: */[
          Css.alignSelf(Css.center),
          /* :: */[
            Css.paddingLeft(Css.px(10)),
            /* :: */[
              Css.flex(/* `num */[
                    5496390,
                    1
                  ]),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

var level = Css.style(/* :: */[
      Css.color(Css.white),
      /* :: */[
        Css.fontSize(Css.px(30)),
        /* :: */[
          Css.alignSelf(Css.center),
          /* :: */[
            Css.paddingRight(Css.px(10)),
            /* [] */0
          ]
        ]
      ]
    ]);

var extraInfoContainer = Css.style(/* :: */[
      Css.display(Css.flexBox),
      /* :: */[
        Css.flexDirection(Css.row),
        /* :: */[
          Css.color(Css.white),
          /* [] */0
        ]
      ]
    ]);

var extraInfo = Css.style(/* :: */[
      Css.display(Css.flexBox),
      /* :: */[
        Css.flexDirection(Css.column),
        /* :: */[
          Css.flex(/* `num */[
                5496390,
                1
              ]),
          /* :: */[
            Css.alignItems(Css.center),
            /* :: */[
              Css.marginTop(Css.px(5)),
              /* :: */[
                Css.marginBottom(Css.px(5)),
                /* [] */0
              ]
            ]
          ]
        ]
      ]
    ]);

var extraInfoButton = Css.style(/* :: */[
      Css.border(Css.px(0), Css.solid, Css.black),
      /* :: */[
        Css.backgroundColor(Css.rgb(29, 27, 27)),
        /* :: */[
          Css.color(Css.white),
          /* :: */[
            Css.paddingTop(Css.px(3)),
            /* :: */[
              Css.paddingBottom(Css.px(3)),
              /* :: */[
                Css.fontSize(Css.px(14)),
                /* [] */0
              ]
            ]
          ]
        ]
      ]
    ]);

var PlayerStyles = {
  main: main,
  infoContainer: infoContainer,
  avatar: avatar,
  username: username,
  level: level,
  extraInfoContainer: extraInfoContainer,
  extraInfo: extraInfo,
  extraInfoButton: extraInfoButton
};

exports.PlayerStyles = PlayerStyles;
/* main Not a pure module */
