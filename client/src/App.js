import React, { useState, useEffect } from 'react';
import { FaAdjust } from "react-icons/fa";
import './App.css';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import FilterColum from './components/FilterColum';
import GroupGrid from './components/GroupGrid';
import GroupDetails from './components/GroupDetails';

function App() {
  const [theme, setTheme] = useState('light');
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [groups, setGroups] = useState([]);
  const [visibleGroups, setVisibleGroups] = useState(9);
  const [filteredGroups, setFilteredGroups] = useState([]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const handleCardClick = (group) => {
    setSelectedGroup(group);
  };

  const handleCloseGroupDetails = () => {
    setSelectedGroup(null);
  };

  const loadMoreGroups = () => {
    setVisibleGroups((prevVisibleGroups) => prevVisibleGroups + 9);
  };

  const handleSearch = (keyword) => {
    const filtered = groups.filter((group) => {
      const { title, topic } = group;
      const regex = new RegExp(keyword, 'i');
  
      return (
        regex.test(title) ||
        regex.test(topic)
      );
    });
  
    setFilteredGroups(filtered);
  };
  
  const handleFilter = (selectedTopics) => {
    if (selectedTopics == null || selectedTopics.length === 0) {
      setFilteredGroups(groups);
      return;
    }
    const filtered = groups.filter((group) => {
      return selectedTopics.includes(group.topic);
    });
  
    setFilteredGroups(filtered);
  };

  
  useEffect(() => {
    // GET groups from server
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost/groups");
        const data = await response.json();
        setGroups(data);
        setFilteredGroups(data); // Initially, display all groups
      } catch (error) {
        console.error("Error fetching groups:", error);
      }
    };
    fetchData();
  }, []);

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
        <SearchBar onSearch={handleSearch} />
        <div className="App-content">
          <div className="FilterColum">
            <FilterColum onFilter={handleFilter}/>
          </div>
          <div className="GroupGrid">
            <GroupGrid groups={filteredGroups}  visibleGroups={visibleGroups}  loadMoreGroups={loadMoreGroups} onCardClick={handleCardClick}/>
          </div>
        </div>
        {selectedGroup && (
          <div className="GroupDetails-container">
            <GroupDetails group={selectedGroup} onClose={handleCloseGroupDetails}/>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;