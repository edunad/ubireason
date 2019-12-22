open Jest;
open Expect;

test("Player component renders successfully", () =>
    ReactTestingLibrary.render(<Player id="test" name="test" level="20" />)
    |> ReactTestingLibrary.container
    |> expect
    |> toMatchSnapshot
);