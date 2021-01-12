import React, { useState, useContext } from "react";
import Switch from "react-switch";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Application() {
  const { session, logout } = useContext(AuthContext);
  const [redirect, setRedirect] = useState(!session.loggedIn);

  const { theme, switchTheme, dark } = useContext(ThemeContext);

  document.title = "To Do List";

  function disconnect() {
    setRedirect(true);
    logout();
  }

  function SideBar() {
    return (
      <div className="sidebar">
        <div className="sidebar-item">
          <p>Adicionar</p>
        </div>
        <div className="sidebar-item">
          <p>Excluir</p>
        </div>
        <div className="sidebar-item">
          <p>Salvar</p>
        </div>
      </div>
    );
  }

  return (
    <div className="application">
      <header>
        <div className="loginInfo">
          <h1>To Do List</h1>
          <div style={{display: "flex", flexDirection: "row", alignItems: "center", columnGap: 5}}>
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
          <button onClick={() => disconnect()}>Sair</button>
        </div>
      </header>
      {redirect && <Redirect to="/" />}
      <div className="main-app">
        <SideBar />
      </div>
    </div>
  );
}
