
import { background } from "../../../../utils/backgroundByType";
import "./PokeTypes.css";

export const PokeTypes = ({ pokemon }) => {
  return (
    <div className="types">
      {pokemon?.types.map(({ type: { name } }) => (
        <div
          key={name}
          style={{ background: background[name] }}
          className="type"
        >
          {name}
        </div>
      ))}
    </div>
  );
};
