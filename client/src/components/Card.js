import React from 'react';
import './Card.css';

const Card = ({ group, onClick }) => {
  const { title, postDate, duration, topic } = group;

  return (
    <div className="card" onClick={onClick}>
      <h3>{title}</h3>
      <p>Posted: {postDate}</p>
      <p>Duration: {duration}</p>
      <p>Topic: {topic}</p>
    </div>
  );
};

export default Card;
