import React from "react";
import "../style/App.css";
import isAuthenticated from '../auth/isAuthenticated';
import { Redirect } from 'react-router-dom';
import { useState, useEffect } from "react";

const api = require("../config/apiConfig.json");

export default function Register() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    isAuthenticated() ? setRedirect(true) : setRedirect(false);
  },[]);

  async function register() {
    const url = api.server + "/auth/register";
    console.log(url, name, email, password);

    await fetch(url, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        name,
        email,
        password
      })
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.token){
          localStorage.setItem('TOKEN', json.token);
          setRedirect(true)
        }
      })
      .catch((err) => {
        console.log("Failed to authenticate: " + err);
      });
  }


  return (
    <div className="auth-page">
      { redirect && <Redirect to='/app' />}
      <div className="registerBox">
        <p>Nome completo</p>
        <input className="auth-input" type="text" onChange={({ target }) => setName(target.value)}></input>
        <p>E-mail</p>
        <input className="auth-input" type="text"onChange={({ target }) => setEmail(target.value)}></input>
        <p>Senha</p>
        <input className="auth-input" type="password" onChange={({ target }) => setPassword(target.value)}></input>
        <button className="auth-button" onClick={() => register()}>Criar conta</button>
      </div>
    </div>
  );
}
