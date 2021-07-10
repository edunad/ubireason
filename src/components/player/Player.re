

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
        | UpdateExtraData(extraData) => {extraData: Some(extraData)}
    }
};

[@react.component]
let make = (~id, ~name, ~level) => {
    open PlayerStyles;
    let (state, dispatch) = React.useReducer(reducer, state);

    <div className=PlayerStyles.main>
        <div className=PlayerStyles.infoContainer>
            <img className=PlayerStyles.avatar src={j|https://ubisoft-avatars.akamaized.net/$id.png|j}/>
            <div className=PlayerStyles.username>{ReasonReact.string(name)}</div>
            <div className=PlayerStyles.level>{ReasonReact.string("Level "++level)}</div>
        </div>
        {
            switch (state.extraData) {
                | Some(info) => 
                    <div className=PlayerStyles.extraInfoContainer>
                        {switch (info.wins) {
                            | Some(wins) => <Info name="Wins" value=wins />
                            | None => <Info name="Wins" value=0 />
                        }}
                        {switch (info.losses) {
                            | Some(losses) => <Info name="Losses" value=losses />
                            | None => <Info name="Losses" value=0 />
                        }}


                        {switch (info.kills) {
                            | Some(kills) => <Info name="Kills" value=kills />
                            | None => <Info name="Kills" value=0 />
                        }}
                        {switch (info.deaths) {
                            | Some(deaths) => <Info name="Deaths" value=deaths />
                            | None => <Info name="Deaths" value=0 />
                        }}


                        {switch (info.melees) {
                            | Some(melees) => <Info name="Melees" value=melees />
                            | None => <Info name="Melees" value=0 />
                        }}
                        {switch (info.bullets) {
                            | Some(bullets) => <Info name="Bullets" value=bullets />
                            | None => <Info name="Bullets" value=0 />
                        }}

                        {switch (info.played) {
                            | Some(played) => <Info name="Played" value=played />
                            | None => <Info name="Played" value=0 />
                        }}

                        {switch (info.headshots) {
                            | Some(headshots) => <Info name="Headshots" value=headshots />
                            | None => <Info name="Headshots" value=0 />
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