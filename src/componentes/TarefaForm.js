import React, { useState } from 'react';

const TarefaForm = ({ adicionarTarefa }) => {
  const [textoTarefa, setTextoTarefa] = useState('');

  const handleChange = (e) => {
    setTextoTarefa(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    adicionarTarefa(textoTarefa);
    setTextoTarefa('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={textoTarefa}
        onChange={handleChange}
        placeholder="Digite uma nova tarefa..."
      />
      <button type="submit">Adicionar Tarefa</button>
    </form>
  );
};

export default TarefaForm;
