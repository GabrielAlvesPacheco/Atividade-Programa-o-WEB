import React, { useState } from 'react';
import { useTaskContext } from './TaskContext';  // Importe useTaskContext, não TaskProvider
import { Link } from 'react-router-dom';

const TaskList = () => {
  const { tasks, addTask } = useTaskContext();  // Use useTaskContext para consumir o contexto
  const [newTask, setNewTask] = useState({ title: '', description: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask({ title: '', description: '' });
  };

  return (
    <div className="task-container">
      <div className="task-form-container">
        <div className="task-form">
          <h2>Nova Tarefa:</h2>
          <form onSubmit={handleAddTask}>
            <input
              type="text"
              name="title"
              placeholder="Título da tarefa"
              value={newTask.title}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="description"
              placeholder="Descrição da Tarefa"
              value={newTask.description}
              onChange={handleInputChange}
              required
            />
            <button type="submit">Criar</button>
          </form>
        </div>
      </div>
      <div className="task-list-container">
        {tasks.map(task => (
          <div key={task.id} className="task">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <div className="view-details-container">
          <Link to={`/tasks/${task.id}`} className="view-details">Ver Detalhes</Link>
        </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;