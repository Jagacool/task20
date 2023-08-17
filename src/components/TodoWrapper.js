// TodoWrapper.js
import React, { useState } from 'react';
import { TodoForm } from './TodoForm';
import { Todo } from './Todo';
import { v4 as uuidv4 } from 'uuid';

export const TodoWrapper = () => {
  // ...

  return (
    <div className="TodoWrapper">
      <h1>Get Things Done !</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} /* CRUD functions and status dropdown handler */ />
      ))}
    </div>
  );
};
