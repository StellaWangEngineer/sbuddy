import React, { useState } from 'react';
import { FaSun, FaMoon } from "react-icons/fa";
import './App.css';
import NavBar from './components/NavBar';

function App() {
  const [theme, setTheme] = useState('light');
  const [isChecked, setIsChecked] = useState(theme === 'dark');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    setIsChecked(newTheme === 'dark');
  };

  return (
    <div className={`App-${theme}`}>
      <div className="App">
        <header className="App-header">
        <div className="nav-container">
          <NavBar />
        </div>
        <div className="toggle-container">
          <FaSun />
          <label className="toggle-switch">
            <input type='checkbox' checked={isChecked} onChange={toggleTheme} />
            <span className="slider"></span>
          </label>
          <FaMoon />
        </div>
        </header>
      </div>
    </div>
  );
}

export default App;
