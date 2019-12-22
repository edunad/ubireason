module AppStyles = {
    /* Open the Css module, so we can access the style properties below without prefixing them with Css. */
    open Css;

    let main = style([
        display(flexBox),
        flexDirection(column),
        alignItems(center),
        marginRight(`percent(10.)),
        marginLeft(`percent(10.))
    ]);

    let form = style([
        display(flexBox),
        width(`percent(100.)),
        justifyContent(center)
    ]);

    let formInput = style([
        flex(`num(1.)),
        border(px(0), solid, black),
        backgroundColor(black),
        fontSize(px(25)),
        color(white),
        paddingLeft(px(5))
    ]);

    let formButton = style([
        border(px(0), solid, black),
        backgroundColor(rgb(15, 15, 15)),
        color(white),
        fontSize(px(17))
    ]);

    let logo = style([
        marginBottom(px(30)),
        marginTop(px(30))
    ]);

    let playerContainer = style([
        display(flexBox),
        flexDirection(column),
        width(`percent(100.)),
        alignItems(center)
    ]);

    let playerCount = style([
        marginBottom(px(10)),
        marginTop(px(10))
    ]);
} 