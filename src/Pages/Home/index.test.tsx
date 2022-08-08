import {
  getByPlaceholderText,
  getByTestId,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "./index";

function Mock() {
  return <Home />;
}

describe("Pages/Home", () => {
  it(`should render list items`, () => {
    const { getByText } = render(<Mock />);
    expect(getByText("Bruno")).toBeInTheDocument();
    expect(getByText("Marcia")).toBeInTheDocument();
  });

  it(`should add new item to the list`, async () => {
    const { getByText, debug, getByTestId, findByText } = render(<Mock />);
    const inputElement = getByTestId("inputNewItem");
    const addButton = getByText("Adicionar");
    debug();
    await userEvent.type(inputElement, "Dereck");
    await userEvent.click(addButton);
    debug();

    // Modo 1
    expect(await findByText("Dereck")).toBeInTheDocument();

    //Modo 2
    await waitFor(() => {
      expect(getByText("Dereck")).toBeInTheDocument();
    });
  });

  it(`should remove item to the list`, async () => {
    const { getByText, getAllByText, debug, getByTestId, queryByText } = render(
      <Mock />
    );
    const removeButton = getAllByText("Remover");
    debug();
    await userEvent.click(removeButton[0]);
    debug();

    // Modo 1
    await waitFor(() => {
      expect(queryByText("Bruno")).not.toBeInTheDocument();
    });
    //Modo 2
    // await waitForElementToBeRemoved(() => {
    //   return getByText("Bruno");
    // });
  });
});
