import React from 'react';
import { useState, useContext, useEffect } from 'react';
import { AddCard, Campo, Description, Button } from '../style/Components';
import { TaskController } from '../pages/Application';

export default function AddTask({ show, theme, update }) {
  const { saveTask, cancel, editTask } = useContext(TaskController);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);

  async function save() {
    let ok;
    if (!update.isUpdate) {
      ok = await saveTask(name, description);
      setError(!ok);
    } else {
      ok = await editTask({ _id: update.data._id, name, description });
      setError(!ok);
    }
    
    if(ok) {
      clearInputs();
    }
  }

  useEffect(() => {
    if (update.isUpdate) {
      setName(update.data.name);
      setDescription(update.data.description);
    } else {
      clearInputs();
    }
  }, [update])

  function clearInputs() {
    setName("");
    setDescription("");
  }

  return (
    <AddCard show={show} theme={theme} style={{ transition: "500ms" }}>
      <p>Nome da tarefa:</p>
      <Campo value={name} className="add-taskInput" theme={theme} onChange={({ target }) => setName(target.value)} />
      <p>Descrição:</p>
      <Description
        theme={theme}
        onChange={({ target }) => setDescription(target.value)}
        value={description}
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