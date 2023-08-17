import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({
  task,
  deleteTodo,
  editTodo,
  toggleComplete,
  toggleStatusDropdown,
}) => {
  return (
    <div className="Todo">
      <p className={`${task.completed ? 'completed' : ''}`} onClick={() => toggleComplete(task.id)}>
        {task.task}
      </p>
      <p>{task.description}</p>
      <div>
        {task.showStatusDropdown ? (
          <select value={task.status} onChange={(e) => toggleStatusDropdown(task.id, e.target.value)}>
            <option value="notCompleted">Not Completed</option>
            <option value="completed">Completed</option>
          </select>
        ) : (
          <p className={`${task.completed ? 'completed' : ''}`} onClick={() => toggleComplete(task.id)}>
            {task.task}
          </p>
        )}
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
};
