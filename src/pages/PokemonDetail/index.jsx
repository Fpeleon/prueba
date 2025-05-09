import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonById } from "../../slices/dataSlice";
import { background } from "../../utils/backgroundByType";
import { Header } from "../../components/modules/PokemonDetail/Header";
import { Title } from "../../components/modules/PokemonDetail/Title";
import { PokeTypes } from "../../components/modules/PokemonDetail/PokeTypes";

import { Stats } from "../../components/modules/PokemonDetail/Stats";
import { BaseStats } from "../../components/modules/PokemonDetail/BaseStats";

import "./PokemonDetail.css";

const PokemonDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const pokemonDetail = useSelector((state) => state.data.selectedPokemon);
  const loading = useSelector((state) => state.ui.loading);

  useEffect(() => {
    dispatch(fetchPokemonById(id));
  }, [dispatch, id]);

  const backgroundSelected =
    pokemonDetail?.types && background[pokemonDetail?.types[0]?.type?.name];

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!pokemonDetail) {
    return <div>Pokemon not found...</div>;
  }

  return (
    <div style={{ background: backgroundSelected }} className="pokemon-detail">
      <Header pokemon={pokemonDetail} />
      <div className="info">
        <img
          src={
            pokemonDetail?.sprites?.other?.dream_world?.front_default ||
            pokemonDetail?.sprites?.front_default
          }
          alt={pokemonDetail?.name}
        />
        <PokeTypes pokemon={pokemonDetail} />
        <Title content="About" backgroundSelected={backgroundSelected} />
        <Stats pokemon={pokemonDetail} />
        <Title content="Base Stats" backgroundSelected={backgroundSelected} />
        <BaseStats
          pokemon={pokemonDetail}
          backgroundSelected={backgroundSelected}
        />
      </div>
    </div>
  );
};

export default PokemonDetail;
