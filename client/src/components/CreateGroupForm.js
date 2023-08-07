import React, { useState } from 'react';
import axios from 'axios';

import './CreateGroupForm.css';

function CreateGroupForm({ onClose }) {
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [postDate, setPostDate] = useState(new Date().toISOString().split('T')[0]);
  const [duration, setDuration] = useState('');
  const [teamSize, setTeamSize] = useState('');
  const [contact, setContact] = useState('');
  const [requirements, setRequirements] = useState('');
  const [notes, setNotes] = useState('');
  const [topic, setTopic] = useState('');

  const handleFormSubmit = (e) => {
    const formData = {
      title,
      startDate,
      postDate,
      duration,
      teamSize,
      contact,
      requirements,
      notes,
      topic,
      creator: 'your_creator_value',
    };

    axios.post(process.env.REACT_APP_API_URL + '/groups', formData)
      .then((response) => {
        console.log(response.data);
        onClose();
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
    onClose();
  };

  return (
    <div className='create-group-form'>
      <div className='create-group-form-content'>
        <span className="create-group-form-close" onClick={onClose}>
          &times;
        </span>
        <h3>Create Group</h3>
        <form onSubmit={handleFormSubmit}>
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              maxLength={20}
              required
            />
          </label>
          <label>
            Start Date:
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </label>
          <label>
            Duration:
            <input
              type="text"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              required
            />
          </label>
          <label>
            Team Size:
            <input
              type="number"
              value={teamSize}
              onChange={(e) => setTeamSize(e.target.value)}
            />
          </label>
          <label>
            Contact:
            <input
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
            />
          </label>
          <label>
            Requirements:
            <textarea
              value={requirements}
              onChange={(e) => setRequirements(e.target.value)}
            />
          </label>
          <label>
            Notes:
            <textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
          </label>
          <label>
            Topic:
            <select value={topic} onChange={(e) => setTopic(e.target.value)} required>
              <option value="">Select Topic</option>
              <option value="Study Skills">Study Skills</option>
              <option value="Mock Interview">Mock Interview</option>
              <option value="LeetCode Team Up">LeetCode Team Up</option>
              <option value="Activity Team Up">Activity Team Up</option>
              <option value="Project Team Up">Project Team Up</option>
              <option value="Research Team Up">Research Team Up</option>
              <option value="Study Foreign Languages">Study Foreign Languages</option>
              <option value="Find Job Team Up">Find Job Team Up</option>
            </select>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreateGroupForm;