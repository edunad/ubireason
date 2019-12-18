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
    
    let (state, dispatch) = React.useReducer(reducer, state);

    <div>
        <form onSubmit = {(ev) => {
                ReactEvent.Form.preventDefault(ev);
                Js.log("Searching player " ++ state.input);

                let _ = Api.searchPlayer(state.input)
                |> Js.Promise.then_((results) => {
                    dispatch(UpdatePlayers(results));
                    Js.Promise.resolve();
                });
            }}>
            <input id="search" name="search"
                placeholder="Player name"
                value=state.input
                onChange={(ev) => {
                    let value = ReactEvent.Form.target(ev)##value;
                    dispatch(UpdateInput(value));
                }}/>
            <button type_="submit">{ReasonReact.string("Search Player")} </button>
        </form>

        <div>
            {
                state.isLoading ?
                <div>{ReasonReact.string("Searching player...")}</div>
                : (
                    //<div>{ReasonReact.string("Found ")}</div>
                    state.players
                    |> Array.of_list
                    |> Array.map(({id, name, level}) =>{
                        let level = string_of_int(level);
                        <Player key=id id name level/>
                    })
                    |> ReasonReact.array
                )
            }
        </div>
    </div>
};