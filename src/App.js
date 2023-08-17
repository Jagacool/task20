import React, { useState } from 'react';
import TodoList from './TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  // Define functions for CRUD operations (add, edit, delete, toggle status)

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoList
        todos={todos}
        // Pass the CRUD functions to TodoList component
      />
    </div>
  );
}

export default App;
