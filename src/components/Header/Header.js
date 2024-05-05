import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import './Header.css';

const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <header className={`header ${theme}`}>
      <h1>Theme Switching App</h1>
    </header>
  );
};

export default Header;
