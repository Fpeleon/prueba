import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { PokemonList } from "../../components/PokemonList";
import { fetchPokemonsWithDetails } from "../../slices/dataSlice";
import { Header } from "../../components/Header";
import "./Home.css";

const Home = () => {
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);
  const searchQuery = useSelector(
    (state) => state.data.searchQuery,
    shallowEqual
  );
  // const loading = useSelector((state) => state.ui.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
  }, [dispatch]);

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <Header />
      {/* {loading ? <p>Loading</p> : <PokemonList pokemons={filteredPokemons} />} */}
      <PokemonList pokemons={filteredPokemons} />
    </div>
  );
};

export default Home;
