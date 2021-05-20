import React, { createContext, useState } from 'react';
import colors from '../configs/colors';

export const ThemeContext = createContext();

const lightTheme = {
  backgroundColor: colors.freshWhite,
  color: colors.darkBlue
};
const darkTheme = {
  backgroundColor: colors.darkBlue,
  color: colors.freshWhite
};


const Theme = ({ children }) => {
  const [darkModeEnabled, setDarkMode] = useState(false);
  const [mainTheme, setMainTheme] = useState(lightTheme);
  
  const toggleDarkMode = () => {
    const newTheme = !darkModeEnabled ? darkTheme : lightTheme;

    setMainTheme(newTheme);
    setDarkMode(!darkModeEnabled);
  };
  
  return (
    <ThemeContext.Provider
      value={{
        mainTheme,
        toggleDarkMode,
        darkModeEnabled,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default Theme;
