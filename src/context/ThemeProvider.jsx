import React, { createContext, useState } from 'react';
import { brandA, brandB } from '../utility/constant';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(brandA);

  const toggleTheme = () => {
    setTheme(theme === brandA ? brandB : brandA);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
