import React from 'react';
import './Card.css';

const Card = ({ group, onClick }) => {
  const { title, postDate, duration, topic } = group;

  const isNewPost = isWithin7Days(postDate);

  return (
    <div className="card" onClick={onClick}>
      <h3>{title}</h3>
      <p>Posted: {postDate}</p>
      {isNewPost && <span className="new-badge">New</span>}
      <p>Duration: {duration}</p>
      <p>Topic: {topic}</p>
    </div>
  );
};

export default Card;

const isWithin7Days = (date) => {
  const today = new Date();
  const postDate = new Date(date);
  const timeDifference = today.getTime() - postDate.getTime();
  const daysDifference = timeDifference / (1000 * 3600 * 24);
  return daysDifference <= 7;
};