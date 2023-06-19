import React, { useState } from 'react';
import Card from './Card';
import './GroupGrid.css';

const GroupGrid = ({ group, onCardClick }) => {
  const [visibleGroups, setVisibleGroups] = useState(9);

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
    },
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
    }, 
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
    }, 
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
    }, 
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
    }, 
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
    }, 
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
    }, 
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
    }
  ];

  const handleCardClick = (group) => {
    onCardClick(group);
  };

  const loadMoreGroups = () => {
    setVisibleGroups((prevVisibleGroups) => prevVisibleGroups + 9);
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