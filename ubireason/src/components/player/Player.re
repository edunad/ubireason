

open Api;

type state = {
    extraData: option(thunt)
};

type action =
  | UpdateExtraData(thunt);

let state = {
    extraData: None
};

let reducer = (state, action) => {
    switch(action) {
        | UpdateExtraData(extraData) => {...state, extraData: Some(extraData)}
    }
};

[@react.component]
let make = (~id, ~name, ~level) => {
    let (state, dispatch) = React.useReducer(reducer, state);

    <div>
        <div>{ReasonReact.string(name)}</div>
        <img src={j|https://ubisoft-avatars.akamaized.net/$id/default_256_256.png|j}/>
        <div>{ReasonReact.string(level)}</div>
        {
            switch (state.extraData) {
                | Some(item) => {
                    let bullets = string_of_int(item.kills);
                    <div>{ReasonReact.string(bullets)}</div>
                }
                | None => {
                    <button onClick={ _ => {
                        let _ = Api.getPlayerThunt(id)
                            |> Js.Promise.then_((results) => {
                                dispatch(UpdateExtraData(results));
                                Js.Promise.resolve();
                            });
                    }}>{ReasonReact.string("Get info")}</button>
                }
            }
        }
    </div>;
};