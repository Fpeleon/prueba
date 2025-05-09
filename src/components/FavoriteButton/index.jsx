import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import "./FavoriteButton.css";

export const FavoriteButton = ({ isFavorite, onClick }) => {
  const Icon = isFavorite ? MdFavorite : MdFavoriteBorder;

  return (
    <button className="favorite-btn" onClick={onClick}>
      <Icon style={{ color: isFavorite ? 'red' : 'inherit' }} />
    </button>
  );
};
