[@bs.val] external fetch: string => Js.Promise.t('a) = "fetch";

type playerInfo = {
    id: string,
    name: string,
    level: int
}

type thunt = {
    kills: int,
    deaths: int,
    wins: int,
    losses: int,
    melees: int,
    played: int,
    bullets: int,
    headshots: int
}

type playerThunt = {
    rawThunt: string
}

module Api = {
    open Json.Decode;

    let decodePlayerInfo = 
        field("results",
        list(
            optional(json => {
                id: field("p_id", string, json),
                name: field("p_name", string, json),
                level: field("p_level", int, json),
            })
        )
    );

    let decodePlayerData = json =>
        Json.Decode.{
            rawThunt: json |> field("thunt", string)
        };

    let decodePlayerThunt = json =>
        Json.Decode.{
            kills: json |> field("kills", int),
            deaths: json |> field("deaths", int),
            wins: json |> field("wins", int),
            losses: json |> field("losses", int),
            melees: json |> field("melees", int),
            played: json |> field("played", int),
            bullets: json |> field("bullets", int),
            headshots: json |> field("headshots", int)
        };

    let getPlayerThunt = (guid) => 
        Js.Promise.(
            fetch("https://r6tab.com/api/player.php?p_id=" ++ guid)
            |> then_(response => response##json())
            |> then_(json => decodePlayerData(json) |> resolve)
            |> then_(data => decodePlayerThunt(data.rawThunt |> Json.parseOrRaise) |> resolve)
        );

    let searchPlayer = (name) => 
        Js.Promise.(
            fetch("https://r6tab.com/api/search.php?platform=uplay&search=" ++ name)
            |> then_(response => response##json())
            |> then_(json => decodePlayerInfo(json) |> resolve)
            |> then_(results =>
                results
                |> List.map(item =>
                    switch (item) {
                        | Some(item) => item
                    }
                )
                |> resolve
            )
        );
};  