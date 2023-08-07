import React, { useState } from 'react';
import "./GroupDetails.css";

function GroupDetails({ group, onClose }) {
  const [isVisible, setIsVisible] = useState(true);

  const closeGroupDetails = () => {
    setIsVisible(false);
    onClose();
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="group-details">
      <div className="group-details-content">
        <span className="group-details-close" onClick={closeGroupDetails}>
          &times;
        </span>
        <h2>{group.title}</h2>
        <p>
          <strong>Start Date:</strong> {group.startDate}
        </p>
        <p>
          <strong>Post Date:</strong> {group.postDate}
        </p>
        <p>
          <strong>Duration:</strong> {group.duration}
        </p>
        <p>
          <strong>Team Size:</strong> {group.teamSize}
        </p>
        <p>
          <strong>Contact:</strong> <a href={group.contact}>{group.contact}</a>
        </p>
        <p>
          <strong>Requirements:</strong> {group.requirements}
        </p>
        <p>
          <strong>Notes:</strong> {group.notes}
        </p>
      </div>
    </div>
  );
}

export default GroupDetails;
