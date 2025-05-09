import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemon, getPokemonDetails } from "../api";
import { setLoading } from "./uiSlice";

const initialState = {
  pokemons: [],
  selectedPokemon: null,
  searchQuery: "",
};

export const fetchPokemonsWithDetails = createAsyncThunk(
  "data/fetchPokemonsWithDetails",
  async (_, { dispatch }) => {
    dispatch(setLoading(true));
    const response = await getPokemon();
    const pokemonsDetailed = await Promise.all(
      response.map((pokemon) => getPokemonDetails(pokemon))
    );
    dispatch(setPokemons(pokemonsDetailed));
    dispatch(setLoading(false));
  }
);

export const fetchPokemonById = createAsyncThunk(
  "data/fetchPokemonById",
  async (id, { dispatch }) => {
    dispatch(setLoading(true));
    const response = await getPokemonDetails({
      url: `https://pokeapi.co/api/v2/pokemon/${id}`,
    });
    dispatch(setSelectedPokemon(response));
    dispatch(setLoading(false));
  }
);

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    setSelectedPokemon: (state, action) => {
      state.selectedPokemon = action.payload;
    },
    setFavorite: (state, action) => {
      const currentPokemonIndex = state.pokemons.findIndex((pokemon) => {
        return pokemon.id === action.payload.pokemonId;
      });

      if (currentPokemonIndex >= 0) {
        const isFavorite = state.pokemons[currentPokemonIndex].favorite;

        state.pokemons[currentPokemonIndex].favorite = !isFavorite;
      }
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload; // Actualiza la consulta de búsqueda
    },
  },
});

export const { setPokemons, setSelectedPokemon, setFavorite, setSearchQuery } =
  dataSlice.actions;

export default dataSlice.reducer;
