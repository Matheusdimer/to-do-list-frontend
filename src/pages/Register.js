import React from "react";
import { Redirect } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import Loading from "../components/Loading";

export default function Register() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const { signUp, session } = useContext(AuthContext);

  function isFieldErr(field) {
    return session.fieldErr === field ? true : false;
  }

  return (
    <div className="auth-page">
      {session.loggedIn && <Redirect to="/app" />}
      {isLoading && <Loading />}
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
          onClick={async () => {
            setIsLoading(true);
            await signUp(email, name, password);
            setIsLoading(false);
          }}
        >
          Criar conta
        </button>
      </div>
    </div>
  );
}
