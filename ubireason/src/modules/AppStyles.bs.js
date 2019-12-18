'use strict';

var Css = require("bs-css/src/Css.js");

var main = Css.style(/* :: */[
      Css.display(Css.flexBox),
      /* :: */[
        Css.flexDirection(Css.column),
        /* :: */[
          Css.alignItems(Css.center),
          /* :: */[
            Css.marginRight(/* `percent */[
                  -119887163,
                  10
                ]),
            /* :: */[
              Css.marginLeft(/* `percent */[
                    -119887163,
                    10
                  ]),
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

var form = Css.style(/* :: */[
      Css.display(Css.flexBox),
      /* :: */[
        Css.width(/* `percent */[
              -119887163,
              100
            ]),
        /* :: */[
          Css.justifyContent(Css.center),
          /* [] */0
        ]
      ]
    ]);

var formInput = Css.style(/* :: */[
      Css.flex(/* `num */[
            5496390,
            1
          ]),
      /* :: */[
        Css.border(Css.px(0), Css.solid, Css.black),
        /* :: */[
          Css.backgroundColor(Css.black),
          /* :: */[
            Css.fontSize(Css.px(25)),
            /* :: */[
              Css.color(Css.white),
              /* :: */[
                Css.paddingLeft(Css.px(5)),
                /* [] */0
              ]
            ]
          ]
        ]
      ]
    ]);

var formButton = Css.style(/* :: */[
      Css.border(Css.px(0), Css.solid, Css.black),
      /* :: */[
        Css.backgroundColor(Css.rgb(15, 15, 15)),
        /* :: */[
          Css.color(Css.white),
          /* :: */[
            Css.fontSize(Css.px(17)),
            /* [] */0
          ]
        ]
      ]
    ]);

var logo = Css.style(/* :: */[
      Css.marginBottom(Css.px(30)),
      /* :: */[
        Css.marginTop(Css.px(30)),
        /* [] */0
      ]
    ]);

var playerContainer = Css.style(/* :: */[
      Css.display(Css.flexBox),
      /* :: */[
        Css.flexDirection(Css.column),
        /* :: */[
          Css.width(/* `percent */[
                -119887163,
                100
              ]),
          /* :: */[
            Css.alignItems(Css.center),
            /* [] */0
          ]
        ]
      ]
    ]);

var playerCount = Css.style(/* :: */[
      Css.marginBottom(Css.px(10)),
      /* :: */[
        Css.marginTop(Css.px(10)),
        /* [] */0
      ]
    ]);

var AppStyles = {
  main: main,
  form: form,
  formInput: formInput,
  formButton: formButton,
  logo: logo,
  playerContainer: playerContainer,
  playerCount: playerCount
};

exports.AppStyles = AppStyles;
/* main Not a pure module */
