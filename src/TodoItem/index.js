import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li
      // Aplicar la clase CSS condicionalmente según el tema
      className={`${props.theme && "--item-dark-theme"}`}
    >
      <div className="checkbox">
        <button 
          // Aplicar la clase CSS condicionalmente si el todo está completado
          className={`check-button ${props.completed && "--icon-completed"}`}
          // Manejar el evento de clic para marcar el todo como completado
          onClick={props.onComplete}
        >
          <i className="fa-solid fa-check"></i>
        </button>
        <button 
          // Clase CSS para el botón de desmarcar todo
          className="uncheck-button"
          // Manejar el evento de clic para marcar el todo como no completado
          onClick={props.onUncomplete}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
        
      <p 
        // Aplicar la clase CSS condicionalmente si el todo está completado
        className={`${props.completed && "--p-completed"}`}
      >
        {props.text}
      </p>
      <button 
        // Clase CSS para el botón de eliminar todo
        className="delete-button"
        // Manejar el evento de clic para eliminar el todo
        onClick={props.onDelete}
      >
        <i className="fa-solid fa-trash"></i>
      </button>
    </li>
  );
}

export { TodoItem };