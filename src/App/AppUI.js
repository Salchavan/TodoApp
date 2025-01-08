import React from 'react';
import { TodoCounter } from '../TodoCounter/index.js';
import { TodoList } from '../TodoList/index.js';
import { TodoItem } from '../TodoItem/index.js';
import { CreateTodoButton } from '../CreateTodoButton/index.js';
import { TodoSearch } from '../TodoSearch/index.js';
import { ChangeThemeButton } from '../ChangeThemeButton/index.js';

function AppUI({
  darkTheme,          // Estado del tema oscuro
  toggleTheme,        // Función para alternar el tema oscuro
  completedTodos,     // Número de todos completados
  totalTodos,         // Número total de todos
  searchValue,        // Valor de búsqueda
  setSearchValue,     // Función para actualizar el valor de búsqueda
  searchedTodos,      // Lista de todos filtrados según el valor de búsqueda
  completeTodo,       // Función para marcar un todo como completado
  uncompleteTodo,     // Función para marcar un todo como no completado
  deleteTodo,         // Función para eliminar un todo
  createTodo,         // Función para crear un nuevo todo
}) {
  return (
    <div className={darkTheme ? 'app dark-theme' : 'app'}>
      {/* Componente para mostrar el contador de todos */}
      <TodoCounter 
        completed={completedTodos} 
        total={totalTodos} 
      />
      <div 
        style={{ 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center", 
          marginTop: "20px", 
          marginLeft: "100px", 
          marginRight: "100px", 
          alignContent: "center", 
          padding: "10px" 
        }}
      >
        {/* Componente para buscar todos */}
        <TodoSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        {/* Botón para crear un nuevo todo */}
        <CreateTodoButton onCreate={() => createTodo(searchValue)}/>
        {/* Botón para cambiar el tema */}
        <ChangeThemeButton 
          theme={darkTheme} 
          onChangeTheme={toggleTheme}
        />
      </div>
      {/* Lista de todos */}
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.id} 
            text={todo.text} 
            completed={todo.completed} 
            onComplete={() => completeTodo(todo.id)}
            onUncomplete={() => uncompleteTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        ))}
      </TodoList>
    </div>
  );
}

export { AppUI };