

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
    open PlayerStyles;
    let (state, dispatch) = React.useReducer(reducer, state);

    <div className=PlayerStyles.main>
        <div className=PlayerStyles.infoContainer>
            <img className=PlayerStyles.avatar src={j|https://ubisoft-avatars.akamaized.net/$id/default_256_256.png|j}/>
            <div className=PlayerStyles.username>{ReasonReact.string(name)}</div>
            <div className=PlayerStyles.level>{ReasonReact.string("Level "++level)}</div>
        </div>
        {
            switch (state.extraData) {
                | Some(info) => 
                    <div className=PlayerStyles.extraInfoContainer>
                        {switch (info.wins) {
                            | Some(wins) => <Info name="Wins" value=wins />
                        }}
                        {switch (info.losses) {
                            | Some(losses) => <Info name="Losses" value=losses />
                        }}


                        {switch (info.kills) {
                            | Some(kills) => <Info name="Kills" value=kills />
                        }}
                        {switch (info.deaths) {
                            | Some(deaths) => <Info name="Deaths" value=deaths />
                        }}


                        {switch (info.melees) {
                            | Some(melees) => <Info name="Melees" value=melees />
                        }}
                        {switch (info.bullets) {
                            | Some(bullets) => <Info name="Bullets" value=bullets />
                        }}

                        {switch (info.played) {
                            | Some(played) => <Info name="Played" value=played />
                        }}

                        {switch (info.headshots) {
                            | Some(headshots) => <Info name="Headshots" value=headshots />
                        }}
                    </div>
                | None => {
                    <button 
                        className=PlayerStyles.extraInfoButton
                        style=(
                            ReactDOMRe.Style.make(~fontVariant="all-petite-caps",~cursor="pointer",())
                        )
                        onClick={ _ => {
                        let _ = Api.getPlayerThunt(id)
                            |> Js.Promise.then_((results) => {
                                dispatch(UpdateExtraData(results));
                                Js.Promise.resolve();
                            });
                    }}>{ReasonReact.string("Load statistics")}</button>
                }
            }
        }
    </div>;
};