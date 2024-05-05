import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import './ThemeSwitcher.css';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-switcher">
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemeSwitcher;
