import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import { PokemonCard } from "../../components/PokemonCard";
import React from "react";

const mockStore = configureStore();
const store = mockStore({});
store.dispatch = jest.fn();

const props = {
  name: "charmander",
  image: "https://pokeapi.co/media/sprites/pokemon/4.png",
  favorite: true,
  id: 4,
};

describe("PokemonCard", () => {
  it("renderiza correctamente", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <PokemonCard {...props} />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(/charmander/i)).toBeInTheDocument();
    expect(screen.getByText("#4")).toBeInTheDocument();
  });
});
