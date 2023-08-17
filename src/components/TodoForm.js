import React, { useState } from 'react';

export const TodoForm = ({ addTodo }) => {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      addTodo({ task, description, status: 'notCompleted' });
      setTask('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="todo-input"
        placeholder="What is the task today?"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="todo-input"
        placeholder="Description"
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};
