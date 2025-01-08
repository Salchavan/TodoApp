import React from "react";
import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue, theme }) {
  return (
    <input 
      // Placeholder para el input de búsqueda
      placeholder="Busca algo, si no esta crealo -->" 
      // Aplicar la clase CSS condicionalmente según el tema
      className={`${theme && "--input-dark-theme"}`}
      // Valor del input de búsqueda
      value={searchValue}
      // Manejar el evento de cambio para actualizar el valor de búsqueda
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };