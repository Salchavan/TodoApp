import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useLocalStorage } from './useLocalStorage.js';
import { AppUI } from './AppUI.js';

// Definición de los todos por defecto
const defaultTodos = [
  { id: uuidv4(), text: 'Agregar nuevos TODOS', completed: false },
];

function App() {
  // Estado para el tema oscuro
  const [darkTheme, setDarkTheme] = React.useState(false);

  // Estado para los todos, utilizando el hook personalizado useLocalStorage
  const [todos, setTodos] = useLocalStorage('TODOS_V1', defaultTodos);

  // Calcular el número de todos completados
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  // Calcular el número total de todos
  const totalTodos = todos.length;

  // Estado para el valor de búsqueda
  const [searchValue, setSearchValue] = React.useState(""); 

  // Filtrar los todos según el valor de búsqueda
  const searchedTodos = todos.filter(
    (todo) => {
      return todo.text.toLowerCase().includes(searchValue.toLowerCase())
    }
  );

  // Función para marcar un todo como completado
  const completeTodo = (id) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.id === id
    );
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }

  // Función para marcar un todo como no completado
  const uncompleteTodo = (id) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.id === id
    );
    newTodos[todoIndex].completed = false;
    setTodos(newTodos);
  }

  // Función para eliminar un todo
  const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  }

  // Función para crear un nuevo todo
  const createTodo = (text) => {
    if (!text) return errorCreateTodo();
    const newTodos = [...todos, { id: uuidv4(), text, completed: false }];
    setTodos(newTodos);
    setSearchValue("");
  }

  // Función para mostrar un mensaje de error al crear un todo vacío
  const errorCreateTodo = () => {
    alert('¡No puedes crear un TODO vacío!');
  }

  // Función para alternar el tema oscuro
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    document.documentElement.classList.toggle('dark-theme');
  }

  // Renderizar el componente AppUI con las props necesarias
  return (
    <AppUI
      darkTheme={darkTheme}
      toggleTheme={toggleTheme}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      uncompleteTodo={uncompleteTodo}
      deleteTodo={deleteTodo}
      createTodo={createTodo}
    />
  );
}

export default App;