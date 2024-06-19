import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componentes/Header';
import TaskList from './componentes/Tasklist'; 
import TaskDetail from './componentes/TaskDetail'; 
import Home from './componentes/Home'; 
import { TaskProvider } from './componentes/TaskContext';
import NotFound from './componentes/NotFound';
import './styles.css';

const App = () => {
  return (
    <Router>
      <TaskProvider>  {/* Use TaskProvider para fornecer contexto para a aplicação */}
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<TaskList />} />
            <Route path="/tasks/:id" element={<TaskDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </TaskProvider>
    </Router>
  );
};

export default App;