import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({ todo, deleteTodo, editTodo, toggleComplete, editTask }) => {
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
            <div onClick={() => editTask('Not Completed', todo.id)}>Not Completed</div>
            <div onClick={() => editTask('Completed', todo.id)}>Completed</div>
          </div>
        )}
      </p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(todo.id)} />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(todo.id)} />
      </div>
    </div>
  );
};
