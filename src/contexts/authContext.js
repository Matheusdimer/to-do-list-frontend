import React from 'react';
import { useState, createContext } from 'react';
import authenticate from '../auth/authenticate';
import register from '../auth/register'

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [session, setSession] = useState(() => {
    let storage = localStorage.getItem("Session");
    
    storage = JSON.parse(storage);

    if (!storage){
      storage = {
        loggedIn: false,
        fieldErr: 'none',
        token: '',
        user: {}
      }
    }

    return storage;
  });

  async function signIn(email, password) {
    const api_response = await authenticate(email, password);

    setSession(api_response);
  }

  async function signUp(email, name, password) {
    const signUp_reponse = await register(email, name, password);

    setSession(signUp_reponse);
  }

  function logout() {
    localStorage.removeItem("Session");

    setSession({...session, loggedIn: false})
  }

  return (
    <AuthContext.Provider value={{ session, signIn, logout, signUp }}>
      { children }
    </AuthContext.Provider>
  );
}