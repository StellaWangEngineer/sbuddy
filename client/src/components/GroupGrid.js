import React from 'react';
import Card from './Card';
import './GroupGrid.css';

const GroupGrid = ({ groups, visibleGroups, loadMoreGroups, onCardClick }) => {
  const handleCardClick = (group) => {
    onCardClick(group);
  };

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
