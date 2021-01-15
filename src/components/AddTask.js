import React from 'react';
import { useState, useContext } from 'react';
import { AddCard, Campo, Description, Button } from '../style/Components';
import { TaskController } from '../pages/Application';

export default function AddTask({ show, theme }) {
  const { saveTask, cancel } = useContext(TaskController);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);

  async function save() {
    const ok = await saveTask(name, description);
    setError(!ok);
  }

  return (
    <AddCard show={show} theme={theme} style={{ transition: "500ms" }}>
      <p>Nome da tarefa:</p>
      <Campo theme={theme} onChange={({ target }) => setName(target.value)} />
      <p>Descrição:</p>
      <Description
        theme={theme}
        onChange={({ target }) => setDescription(target.value)}
      />
      <div className="add-buttons">
        {error && <p>Erro ao incluir tarefa</p>}
        <Button theme={theme} colored={true} onClick={() => save()}>
          Salvar
        </Button>
        <Button
          theme={theme}
          colored={false}
          onClick={() => cancel()}
        >
          Cancelar
        </Button>
      </div>
    </AddCard>
  );
}