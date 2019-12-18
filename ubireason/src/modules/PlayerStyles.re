module PlayerStyles = {
    /* Open the Css module, so we can access the style properties below without prefixing them with Css. */
    open Css;

    let main = style([
        display(flexBox),
        flexDirection(column),
        width(`percent(100.)),
        backgroundColor(rgb(10, 10, 10)),
        marginBottom(px(10)),
        borderBottom(px(5), solid, rgb(41, 41, 41))
    ]);

    let infoContainer = style([
        display(flexBox),
        flexDirection(row)
    ]); 

    let avatar = style([
        width(px(50))
    ]);

    let username = style([
        color(white),
        fontSize(px(20)),
        alignSelf(center),
        paddingLeft(px(10)),
        flex(`num(1.))
    ]);

    let level = style([
        color(white),
        fontSize(px(30)),
        alignSelf(center),
        paddingRight(px(10))
    ]);

    let extraInfoContainer = style([
        display(flexBox),
        flexDirection(row),
        color(white)
    ]);

    let extraInfo = style([
        display(flexBox),
        flexDirection(column),
        flex(`num(1.)),
        alignItems(center),
        marginTop(px(5)),
        marginBottom(px(5))
    ]);

    let extraInfoButton = style([
        border(px(0), solid, black),
        backgroundColor(rgb(29, 27, 27)),
        color(white),
        paddingTop(px(3)),
        paddingBottom(px(3)),
        fontSize(px(14))
    ]);
} 