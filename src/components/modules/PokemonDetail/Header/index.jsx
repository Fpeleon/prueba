import { useNavigate } from "react-router-dom";
import { PokeballIconBig } from "../../../../assets/pokeball";
import { CgArrowLeft } from "react-icons/cg";

import "./Header.css";

export const Header = ({ pokemon }) => {
  const navigate = useNavigate();

  return (
    <header>
      <PokeballIconBig className="pokeball" />
      <div className="left">
        <CgArrowLeft onClick={() => navigate(-1)} />
        <span>{pokemon?.name}</span>
      </div>
      <p>#{pokemon?.id}</p>
    </header>
  );
};
