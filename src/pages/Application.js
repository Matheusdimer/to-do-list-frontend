import React, { useState, useContext, useEffect, createContext } from "react";
import Switch from "react-switch";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import { ThemeContext } from "../contexts/ThemeContext";
import { ActionBar, Button, TasksList } from "../style/Components";
import {
  listTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../tasks/apiTasks";
import Tarefas from "../components/Tarefas";
import AddTask from "../components/AddTask";
import Loading from "../components/Loading";

export const TaskController = createContext();

export default function Application() {
  const { session, logout } = useContext(AuthContext);
  const [redirect, setRedirect] = useState(!session.loggedIn);
  const [showAddTask, setShowAddTask] = useState(false);
  const [addConfig, setAddConfig] = useState({ isUpdate: false, data: {} });
  const [tasks, setTasks] = useState([]);

  const [event, setEvent] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const { theme, switchTheme, dark } = useContext(ThemeContext);

  document.title = "To Do List";

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const res = await listTasks(session.user._id, session.token);

      if (res.tasks.length > 0) {
        setTasks(res.tasks);
      } else {
        setTasks([
          {
            name: "Sem tarefas por inquanto...",
            description: "Experimente criar uma nova tarefa.",
            finished: "none",
          },
        ]);
      }

      setIsLoading(false);
    }

    fetchData();
    setEvent(false);
  }, [event, session.user._id, session.token]);

  function ActionsBar() {
    return (
      <ActionBar theme={theme}>
        <Button
          onClick={() => setShowAddTask(!showAddTask)}
          theme={theme}
          colored={true}
          width="8rem"
        >
          <ion-icon style={{color: "#fff", fontSize: 24}} name="add-outline"></ion-icon>
          Adicionar
        </Button>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            columnGap: 5,
            transition: 200,
          }}
        >
          <p>Modo Noturno</p>
          <Switch
            checked={dark}
            height={15}
            width={40}
            onChange={() => switchTheme()}
            checkedIcon={false}
            uncheckedIcon={false}
            handleDiameter={20}
            onColor={theme.secundary}
            offHandleColor="#e0e0e0"
          />
        </div>
      </ActionBar>
    );
  }

  function disconnect() {
    setRedirect(true);
    logout();
  }

  async function saveTask(name, description) {
    setIsLoading(true);

    const res = await createTask(
      {
        name,
        description,
        user: session.user._id,
      },
      session.token
    );
    
    setIsLoading(false);

    if (res.ok) {
      //setTasks(tasks.concat([res.task]));
      setEvent(true);
      setShowAddTask(false);
      return true;
    } else {
      return false;
    }
  }

  function cancel() {
    setShowAddTask(false);
    setAddConfig({ isUpdate: false, data: {} });
  }

  async function setFinished(index) {
    const temp_tasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, finished: !task.finished };
      } else {
        return task;
      }
    });

    setTasks(temp_tasks);

    const res = await updateTask(
      temp_tasks[index]._id,
      {
        finished: temp_tasks[index].finished,
      },
      session.token
    );

    if (!res.ok) {
      alert(res.message);
    }
  }

  async function removeTask(index) {
    setIsLoading(true);
    const res = await deleteTask(tasks[index]._id, session.token);
    setIsLoading(false);

    if (res.ok) {
      setEvent(true);
    } else {
      alert(res.message);
    }
  }

  async function editTask(task) {
    setIsLoading(true);

    const res = await updateTask(task._id, task, session.token);
    setIsLoading(false);

    if (res.ok) {
      setEvent(true);
      setShowAddTask(false);
      return true;
    } else {
      return false;
    }
  }

  function showEditTask(index) {
    setShowAddTask(true);
    setAddConfig({ isUpdate: true, data: tasks[index], index });
  }

  return (
    <TaskController.Provider
      value={{
        saveTask,
        cancel,
        setFinished,
        removeTask,
        editTask,
        showEditTask,
      }}
    >
      <div className="application">
        <header>
          <div className="loginInfo">
            <h1>To Do List</h1>
          </div>
          <div className="loginInfo">
            <h2>{session.user.name}</h2>
            <Button theme={theme} colored={true} onClick={() => disconnect()}>
              Sair
            </Button>
          </div>
        </header>
        {redirect && <Redirect to="/" />}
        <div className="main-app">
          <ActionsBar />
          {isLoading && <Loading />}
          {tasks.length > 0 && (
            <TasksList theme={theme}>
              <Tarefas dados={tasks} theme={theme} />
            </TasksList>
          )}
        </div>

        <AddTask show={showAddTask} theme={theme} update={addConfig} />
      </div>
    </TaskController.Provider>
  );
}
