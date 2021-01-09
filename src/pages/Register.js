import React from "react";
import "../style/App.css";
import isAuthenticated from "../auth/isAuthenticated";
import { Redirect } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../contexts/authContext";

export default function Register() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { signUp, session } = useContext(AuthContext);

  function isFieldErr(field) {
    return session.fieldErr === field ? true : false;
  }

  return (
    <div className="auth-page">
      {session.loggedIn && <Redirect to="/app" />}
      <div className="registerBox">
        <p className="label">
          Nome completo
          {isFieldErr("name") && (
            <span className="error-message">Não preenchido</span>
          )}
        </p>
        <input
          className={`auth-input ${isFieldErr("name") ? "error" : ""}`}
          type="text"
          onChange={({ target }) => setName(target.value)}
        ></input>
        <p className="label">
          E-mail
          {isFieldErr("email") && (
            <span className="error-message">Usuário já existente</span>
          )}
        </p>
        <input
          className={`auth-input ${isFieldErr("email") ? "error" : ""}`}
          type="text"
          onChange={({ target }) => setEmail(target.value)}
        ></input>
        <p className="label">
          Senha
          {isFieldErr("password") && (
            <span className="error-message">Não preenchido</span>
          )}
        </p>
        <input
          className="auth-input"
          type="password"
          onChange={({ target }) => setPassword(target.value)}
        ></input>
        <button
          className="auth-button"
          onClick={() => signUp(email, name, password)}
        >
          Criar conta
        </button>
      </div>
    </div>
  );
}
