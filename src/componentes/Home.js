import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <div className="content">
        <div className="text">
          <h1>Bem vindo ao FastOrganizator!</h1>
          <p>Aqui você pode criar suas própias listas de tarefas personalizadas</p>
          <Link to="/tasks" className="btn">Fazer uma lista de tarefas</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;