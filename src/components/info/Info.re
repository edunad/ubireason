[@react.component]
let make = (~name, ~value) => {
    open PlayerStyles;

    <div className=PlayerStyles.extraInfo>
        <div>{ReasonReact.string(name ++ "test")}</div>
        <div>{ReasonReact.string(string_of_int(value))}</div>
        <div>{ReasonReact.string("test")}</div>
    </div>
};