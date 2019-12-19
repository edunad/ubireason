
open Api;

type state = {
  input: string,
  isLoading: bool,
  players: list(playerInfo)
};

type action =
  | UpdateInput(string)
  | UpdatePlayers(list(playerInfo));

let state = {
    input: "failcake",
    isLoading: false,
    players: []
};

let reducer = (state, action) => {
    switch(action) {
        | UpdateInput(input) => {...state, input}
        | UpdatePlayers(players) => {...state, players}
    }
};

[@react.component]
let make = () => {
    open AppStyles;
    let (state, dispatch) = React.useReducer(reducer, state);

    <div className=AppStyles.main>
        <img className=AppStyles.logo src="https://i.imgur.com/gNeWm5H.png"/> // TODO: Move to static
        <form className=AppStyles.form onSubmit = {(ev) => {
                ReactEvent.Form.preventDefault(ev);
                Js.log("Searching players " ++ state.input);

                let _ = Api.searchPlayer(state.input)
                |> Js.Promise.then_((results) => {
                    dispatch(UpdatePlayers(results));
                    Js.Promise.resolve();
                });
            }}>
            <input className=AppStyles.formInput id="search" name="search"
                placeholder="Player name"
                value=state.input
                onChange={(ev) => {
                    let value = ReactEvent.Form.target(ev)##value;
                    dispatch(UpdateInput(value));
                }}/>
            <button 
            className=AppStyles.formButton 
            style=(
                ReactDOMRe.Style.make(~fontVariant="all-petite-caps",~cursor="pointer",())
            )
            type_="submit">{ReasonReact.string("Search Players")} </button>
        </form>

        <div className=AppStyles.playerContainer>
            <div className=AppStyles.playerCount>{ReasonReact.string("Found "++string_of_int(List.length(state.players))++" players")}</div>
            {
                state.isLoading ? (
                    <div>{ReasonReact.string("Searching players...")}</div>
                ) : 
                {
                    state.players
                    |> Array.of_list
                    |> Array.map(({id, name, level}) => {
                        let level = string_of_int(level);
                        <Player key=id id name level/>
                    })
                    |> ReasonReact.array
                }
            }
        </div>
    </div>
};