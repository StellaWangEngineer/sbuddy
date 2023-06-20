import React, { useState, useEffect } from 'react';
import Card from './Card';
import './GroupGrid.css';

const GroupGrid = ({ group, onCardClick }) => {
  const [visibleGroups, setVisibleGroups] = useState(9);
  const [groups, setGroups] = useState([]);

  const handleCardClick = (group) => {
    onCardClick(group);
  };

  const loadMoreGroups = () => {
    setVisibleGroups((prevVisibleGroups) => prevVisibleGroups + 9);
  };

  useEffect(() => {
    // 在组件加载时从 API 获取数据
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost/groups');
        const data = await response.json();
        setGroups(data);
      } catch (error) {
        console.error('Error fetching groups:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="group-grid">
        {groups.slice(0, visibleGroups).map((group, index) => (
          <Card key={index} group={group} onClick={() => handleCardClick(group)} />
        ))}
      </div>
      {visibleGroups < groups.length && (
        <div className="load-more-container"> 
            <button className="load-more-button" onClick={loadMoreGroups}>
              Load More
            </button>
        </div>
      )}
    </div>
  );
};

export default GroupGrid;