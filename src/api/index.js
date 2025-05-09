import axios from "axios";

// Función que obtiene la lista de Pokémons
export const getPokemon = async () => {
  return axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=130")
    .then((res) => res.data.results)
    .catch((err) => console.log(err));
};

// Función para obtener los detalles de un Pokémon específico (se reutiliza para cualquier petición)
export const getPokemonDetails = async (pokemon) => {
  return axios
    .get(pokemon.url)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
