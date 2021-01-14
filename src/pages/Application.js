import React, { useState, useContext } from "react";
import Switch from "react-switch";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import { ThemeContext } from "../contexts/ThemeContext";
import { ActionBar, Button, TasksList, TaskCard } from "../style/Components";

export default function Application() {
  const { session, logout } = useContext(AuthContext);
  const [redirect, setRedirect] = useState(!session.loggedIn);

  const { theme, switchTheme, dark } = useContext(ThemeContext);

  document.title = "To Do List";

  function disconnect() {
    setRedirect(true);
    logout();
  }

  function ActionsBar() {
    return (
      <ActionBar theme={theme}>
        <Button theme={theme} colored={true} width="8rem">
          Adicionar
        </Button>
        <Button theme={theme} colored={false} width="8rem">
          Editar
        </Button>
        <Button theme={theme} colored={false} width="8rem">
          Apagar
        </Button>
      </ActionBar>
    );
  }

  function TaskList() {
    return (
      <TasksList theme={theme}>
        <TaskCard theme={theme}>
          <h1>Título</h1>
          <p>Descrição</p>
        </TaskCard>
        <TaskCard theme={theme}>
          <h1>Título</h1>
          <p>Descrição</p>
        </TaskCard>
        <TaskCard theme={theme}>
          <h1>Título</h1>
          <p>Descrição</p>
        </TaskCard>
        <TaskCard theme={theme}>
          <h1>Título</h1>
          <p>Descrição</p>
        </TaskCard>
      </TasksList>
    );
  }

  return (
    <div className="application">
      <header>
        <div className="loginInfo">
          <h1>To Do List</h1>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              columnGap: 5,
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
            />
          </div>
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
        <TaskList />
      </div>
    </div>
  );
}
