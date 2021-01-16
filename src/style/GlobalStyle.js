import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    color: ${props => props.theme.text};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    background-color: ${props => props.theme.background};
  }

  .App {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.background};
    height: 100vh;
  }

  input:focus,
  textarea:focus,
  select:focus,
  button:focus {
    outline: none;
  }

  .auth-page {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.background};
    height: 100vh;
  }

  .label {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .loginBox {
    display: flex;
    align-items: left;
    flex-direction: column;
    width: clamp(15rem, 25rem, 25rem);
    height: 20rem;
    background-color: ${props => props.theme.cards};
    padding: 2rem;
    box-shadow: 4px 7px 18px -2px rgba(0,0,0,0.53);
    box-shadow: inset;
    transition: 300ms;
  }

  .auth-input {
    font-size: 14pt;
    padding-bottom: 0.3rem;
    color: ${props => props.theme.text};
    border: none;
    border-bottom: 2px solid #a0a0a0;
    border-radius: none;
    transition: 300ms;
    background-color: ${props => props.theme.cards};
  }

  .auth-input:focus {
    border-bottom: 2px solid #609ff1;
  }

  .error {
    border-bottom: 2px solid #ff3333;
  }

  .error-message {
    font-size: 10pt;
    color: #ff3333;
  }

  .auth-button {
    margin-top: 2rem;
    background: #609ff1;
    border: none;
    height: 2.5rem;
    font-size: 14pt;
    color: #f0f0f0;
    transition: 300ms;
    cursor: pointer;
  }

  .auth-button:hover {
    background: #7fb3f7;
  }

  .sign-up {
    text-align: center;
    margin-top: 1rem;
  }

  .registerBox {
    display: flex;
    align-items: left;
    flex-direction: column;
    width: 25rem;
    height: 20rem;
    background-color: ${props => props.theme.cards};
    padding: 2rem;
    box-shadow: 4px 7px 18px -2px rgba(0,0,0,0.53);
    box-shadow: inset;
  }

  .Home {
    height: 100vh;
  }

  .Home .content{
    background-color: ${props => props.theme.background};
    display: flex;
    height: 88%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }

  .application {
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.background};
    height: 100vh;
    margin: 0;
  }

  header {
    display: flex;
    padding: 0 1.5rem 0 1.5rem;
    color: #fff;
    background-color: ${props => props.theme.primary};
    flex-direction: row;
    align-items: center;
    vertical-align: middle;
    justify-content: space-between;
    height: 12%;
  }

  .application .loginInfo {
    display: flex;
    flex-direction: row;
    column-gap: 20px;
    align-items: center;
  }

  .main-app {
    padding: 25px;
    display: flex;
    align-items: center;
    flex-direction: column;
    row-gap: 20px;
    justify-content: center;
  }

  .add-buttons {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    column-gap: 15px;
    margin-top: 50px;
  }

  .loading {
    width: 3%;
    position: fixed;
    top: 48.5%;
    left: 48.5%;
    z-index: 5;
  }

  @media (prefers-reduced-motion: no-preference) {
    .loading {
      animation: logo-spin infinite 1s linear;
    }
  }

  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;