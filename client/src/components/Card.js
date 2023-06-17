import React from 'react';
import './Card.css';

const Card = ({ group }) => {
  const { title, postTime, duration, topic } = group;

  return (
    <div className="card">
      <h3>{title}</h3>
      <p>Posted: {postTime}</p>
      <p>Duration: {duration}</p>
      <p>Topic: {topic}</p>
    </div>
  );
};

export default Card;
