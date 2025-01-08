import "./TodoCounter.css";

function TodoCounter({ total, completed }) {
  return (
    // Mostrar el contador de todos completados y el total de todos
    <h1>Has completado {completed} de {total} TODOs</h1>
  );
}

export { TodoCounter };