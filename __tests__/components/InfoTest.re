open Jest;
open Expect;

test("Info component renders successfully", () =>
    ReactTestingLibrary.render(<Info name="wins" value=20 />)
    |> ReactTestingLibrary.container
    |> expect
    |> toMatchSnapshot
);