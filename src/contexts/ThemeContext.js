import React, { useState, createContext } from 'react';

const themes = require('../config/themes.json');

export const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);
  const [theme, setTheme] = useState(() => {
    let local_theme = localStorage.getItem('Theme')
    local_theme = JSON.parse(local_theme);

    if (local_theme){
      if (local_theme.name === "Dark") {
        setDark(true);
      }
      return local_theme;
    } else {
      return themes.light;
    }
  });

  function switchTheme(){
    if (theme.name === "Light") {
      setTheme(themes.dark)
      localStorage.setItem('Theme', JSON.stringify(themes.dark));
    } else {
      setTheme(themes.light)
      localStorage.setItem('Theme', JSON.stringify(themes.light));
    }

    setDark(!dark)
  }

  return (
    <ThemeContext.Provider value={{ theme, switchTheme, dark }} >
      { children }
    </ThemeContext.Provider>
  )
}