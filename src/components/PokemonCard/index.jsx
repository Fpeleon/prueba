import { useDispatch } from "react-redux";
import { FavoriteButton } from "../FavoriteButton";
import { setFavorite } from "../../slices/dataSlice";
import { Link } from "react-router-dom";
import "./PokemonCard.css";

export const PokemonCard = ({ name, image, favorite, id }) => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(setFavorite({ pokemonId: id }));
  };

  return (
    <div className="card">
      <div className="card-number">#{id}</div>
      <div className="card-favorite">
        <FavoriteButton isFavorite={favorite} onClick={handleOnClick} />
      </div>
      <img src={image} alt="Charmander" />
      <Link to={`/pokemon/${id}`}>
        <div className="card-name">{name}</div>
      </Link>
      <div className="card-background"></div>
    </div>
  );
};
