import React, { createContext, useState } from 'react';

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    const id = tasks.length + 1;
    const taskToAdd = { id, ...newTask };
    setTasks([...tasks, taskToAdd]);
  };

  const contextValue = {
    tasks,
    addTask,
  };

  return (
    <TaskContext.Provider value={contextValue}>
      {children}
    </TaskContext.Provider>
  );
};

const useTaskContext = () => {
  const context = React.useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};

export { TaskProvider, useTaskContext };