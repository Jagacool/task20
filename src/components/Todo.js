// Todo.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({ todo, deleteTodo, editTodo, toggleComplete }) => {
  return (
    <div className="Todo">
      <p className={`${todo.completed ? 'completed' : ''}`} onClick={() => toggleComplete(todo.id)}>
        {todo.task}
      </p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(todo.id)} />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(todo.id)} />
      </div>
    </div>
  );
};



// Todo.js
import React, { useState } from 'react';

export const Todo = ({ todo, deleteTodo, editTodo, toggleComplete }) => {
  const [statusDropdown, setStatusDropdown] = useState(false);

  return (
    <div className="Todo">
      <p
        className={`${todo.completed ? 'completed' : ''}`}
        onClick={() => toggleComplete(todo.id)}
        onMouseEnter={() => setStatusDropdown(true)}
        onMouseLeave={() => setStatusDropdown(false)}
      >
        {todo.task}
        {statusDropdown && (
          <div className="status-dropdown">
            <div onClick={() => toggleComplete(todo.id)}>Not Completed</div>
            <div onClick={() => toggleComplete(todo.id)}>Completed</div>
          </div>
        )}
      </p>
      <div>
        {/* Edit and Delete icons */}
      </div>
    </div>
  );
};
