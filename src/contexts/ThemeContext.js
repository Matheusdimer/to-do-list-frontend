import React, { useState, createContext } from 'react';

const themes = require('../config/themes.json');

export const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(themes.light);
  const [dark, setDark] = useState(false);

  function switchTheme(){
    if (theme === themes.light) {
      setTheme(themes.dark)
    } else {
      setTheme(themes.light)
    }

    setDark(!dark)
  }

  return (
    <ThemeContext.Provider value={{ theme, switchTheme, dark }} >
      { children }
    </ThemeContext.Provider>
  )
}