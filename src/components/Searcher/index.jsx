// src/components/Searcher.jsx
import { useState } from "react";
import "./Searcher.css";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../../slices/dataSlice";

export const Searcher = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    dispatch(setSearchQuery(newQuery)); // Actualiza la consulta de búsqueda
  };

  return (
    <div className="searcher">
      <input
        type="search"
        value={query}
        onChange={handleInputChange}
        placeholder="Buscar Pokémon"
      />
    </div>
  );
};
