import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../contexts/authContext"

export default function Application() {
  const { session, logout } = useContext(AuthContext);
  const [redirect, setRedirect] = useState(!session.loggedIn);

  document.title = "To Do List"

  function disconnect() {
    setRedirect(true);
    logout();
  }
  /*
  fetch(api.server + '/projects', {
    method: 'GET',
    headers: new Headers({
      "Authorization": "Bearer " + localStorage.getItem('TOKEN')
    })
  }).then((res) => res.json()).then((json) => {
    console.log(json);
  })
  */

  return (
    <div>
      {redirect && <Redirect to="/" />}
      <h1>Você está na aplicação agora</h1>
      <div>
        <p>Usuário: {session.user.name}</p>
        <p>Token de autenticação: {session.token}</p>

        <button onClick={() => disconnect()}>Sair</button>
      </div>
    </div>
  );
}
