import React from "react";
import { useState, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import Loading from "../components/Loading";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const { session, signIn } = useContext(AuthContext);

  document.title = "Login";

  function isFieldErr(field) {
    return session.fieldErr === field ? true : false;
  }

  async function sendLogin(event) {
    event.preventDefault();
    
    setIsLoading(true);
    await signIn(email, password);
    setIsLoading(false);  
  }

  return (
    <div className="auth-page">
      {session.loggedIn && <Redirect to="/app" />}
      {isLoading && <Loading />}
      <div className="loginBox">
        <form className="auth-form" onSubmit={sendLogin}>
          <p className="label">
            E-mail
            {isFieldErr("email") && (
              <span className="error-message">Usuário inválido</span>
            )}
          </p>
          <input
            className={`auth-input ${isFieldErr("email") ? "error" : ""}`}
            type="email"
            onChange={({ target }) => setEmail(target.value)}
          ></input>
          <p className="label">
            Senha
            {isFieldErr("password") && (
              <span className="error-message">Senha inválida</span>
            )}
          </p>
          <input
            className={`auth-input ${isFieldErr("password") ? "error" : ""}`}
            type="password"
            onChange={({ target }) => setPassword(target.value)}
          ></input>
          <button type="submit" className="auth-button">
            Login
          </button>
        </form>
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
