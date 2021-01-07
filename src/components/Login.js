import React from "react";
import "../style/App.css";
import { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import isAuthenticated from '../auth/isAuthenticated'

const api = require("../config/apiConfig.json");

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [fieldErr, setFieldErr] = useState();
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    isAuthenticated() ? setRedirect(true) : setRedirect(false);
  },[]);

  async function authenticate() {
    const url = api.server + "/auth/authenticate";

    await fetch(url, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        email,
        password
      })
    }).then((res) => res.json()).then((json) => {
      console.log(json);
      if (json.token){
        localStorage.setItem('TOKEN', json.token);
        setRedirect(true)
      } else if (json.field){
        setFieldErr(json.field)
      }
    }).catch((err) => {
      console.log("Failed to authenticate: " + err);
    });
  }

  function isFieldErr(field) {
    return fieldErr === field ? true : false;
  }

  return (
    <div className="auth-page">
      { redirect && <Redirect to='/app' /> }
      <div className="loginBox">
        <p className="label">E-mail{isFieldErr('email') && <span className='error-mensage'>Usuário inválido</span>}</p>
        <input
          className={`auth-input ${isFieldErr('email') ? 'error' : ''}`}
          type="email"
          onChange={({ target }) => setEmail(target.value)}
        ></input>
        <p className="label">Senha{isFieldErr('password') && <span className='error-mensage'>Senha inválida</span>}</p>
        <input
          className={`auth-input ${isFieldErr('password') ? 'error' : ''}`}
          type="password"
          onChange={({ target }) => setPassword(target.value)}
        ></input>
        <button type="submit" className="auth-button" onClick={() => authenticate()}>
          Login
        </button>
        <div className="sign-up">
          <p>Não possui uma conta? </p>
          <Link
            style={{ color: "#609ff1", textDecoration: "none" }}
            to="/register"
          >
            Cadastre-se
          </Link>
        </div>
      </div>
    </div>
  );
}
