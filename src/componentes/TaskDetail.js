import React from 'react';
import { useParams } from 'react-router-dom';
import { useTaskContext } from './TaskContext'; // Importe TaskContext do seu contexto

const TaskDetail = () => {
  const { id } = useParams();
  const { tasks } = useTaskContext(); // Acesso ao contexto de tasks
  const task = tasks.find(t => t.id === parseInt(id));

  if (!task) return <h2>Tarefa não encontrada</h2>;

  return (
    <div className="task-detail">
      <div className="task-card">
        <h2>{task.title}</h2>
        <p>{task.description}</p>
      </div>
    </div>
  );
}

export default TaskDetail;
