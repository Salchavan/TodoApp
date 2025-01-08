import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  return (
    <button 
      // Clase CSS para el botón de crear todo
      className={`create-todo-button`}
      // Manejar el evento de clic para crear un nuevo todo
      onClick={props.onCreate}
    >
      {/* Icono de más para indicar la acción de crear */}
      <i className={`fa-solid fa-plus`}></i>
    </button>
  );
}

export { CreateTodoButton };