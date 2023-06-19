import React from 'react';
import Card from './Card';
import './GroupGrid.css';

const GroupGrid = ({ group, onCardClick }) => {
  const groups = [
    {
      title: '刷题招工wqkwhdnlmwoidlnw doiwlknd wqoidnw dowqnd wdowqndw o',
      startDate: '2023-06-18',
      postDate: '2023-06-18',
      duration: '3 months',
      teamSize: '10',
      url: 'https://www.discord.com',
      requirements: 'Need baisc knowledge in algorithm',
      content: 'I am a discord bot',
      topic: '技术',
      creator: 'Bot'
    }, {
      title: '刷题招工',
      startDate: '2023-06-30',
      postDate: '2023-05-15',
      duration: '3 months',
      teamSize: '10',
      url: 'https://www.discord.com',
      requirements: 'Need baisc knowledge in algorithm',
      content: 'I am a discord bot',
      topic: '技术',
      creator: 'Bot'
    }, {
      title: '刷题招工',
      startDate: '2023-06-30',
      postDate: '2023-05-15',
      duration: '3 months',
      teamSize: '10',
      url: 'https://www.discord.com',
      requirements: 'Need baisc knowledge in algorithm',
      content: 'I am a discord bot',
      topic: '技术',
      creator: 'Bot'
    }, {
      title: '刷题招工',
      startDate: '2023-06-30',
      postDate: '2023-05-15',
      duration: '3 months',
      teamSize: '10',
      url: 'https://www.discord.com',
      requirements: 'Need baisc knowledge in algorithm',
      content: 'I am a discord bot',
      topic: '技术',
      creator: 'Bot'
    }
  ];

  const handleCardClick = (group) => {
    onCardClick(group);
  };

  return (
    <div className="group-grid">
      {groups.map((group, index) => (
        <Card key={index} group={group} onClick={() => handleCardClick(group)}/>
      ))}
    </div>
  );
};

export default GroupGrid;