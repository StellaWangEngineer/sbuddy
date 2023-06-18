import React, { useState } from 'react';
import { FaAdjust } from "react-icons/fa";
import './App.css';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import FilterColum from './components/FilterColum';
import GroupGrid from './components/GroupGrid';
import GroupDetails from './components/GroupDetails';

function App() {
  const [theme, setTheme] = useState('light');
  const [selectedGroup, setSelectedGroup] = useState(null); // 追踪用户点击的Group

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const handleCardClick = (group) => {
    setSelectedGroup(group);
  };

  return (
    <div className={`App-${theme}`}>
      <div className="App">
        <header className="App-header">
          <div className="nav-container">
            <NavBar />
          </div>
          <div className="toggle-container">
            <FaAdjust className="toggle-icon" onClick={toggleTheme} />
          </div>
        </header>
        <SearchBar />
        <div className="App-content">
          <div className="FilterColum">
            <FilterColum />
          </div>
          <div className="GroupGrid">
            <GroupGrid onCardClick={handleCardClick}/>
          </div>
        </div>
        {selectedGroup && (
          <div className="GroupDetails-container">
            <GroupDetails group={selectedGroup} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
