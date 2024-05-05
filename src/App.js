import React from 'react';
import UserForm from './components/UserForm/UserForm';
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';
import Header from './components/Header/Header';
import { ThemeProvider } from './context/ThemeContext'; // Updated import path
import './App.css';

const App = () => {
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <ThemeSwitcher />
        <UserForm />
      </div>
    </ThemeProvider>
  );
};

export default App;
