import { PokemonCard } from "../PokemonCard";
import "./PokemonList.css";

export const PokemonList = ({ pokemons }) => {
  return (
    <div className="pokemon-list-container">
      <div className="pokemon-list">
        {pokemons?.map((pokemon) => {
          return (
            <PokemonCard
              id={pokemon?.id}
              key={pokemon?.name}
              name={pokemon?.name}
              image={pokemon?.sprites.front_default}
              favorite={pokemon?.favorite}
            />
          );
        })}
      </div>
    </div>
  );
};
