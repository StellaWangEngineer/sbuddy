import React, { useState, useEffect } from 'react';
import './FilterColum.css';

function FilterColum({ onFilter }) {
  const [selectedTopics, setSelectedTopics] = useState([]);

  const handleTopicChange = (event) => {
    const topic = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedTopics((prevSelectedTopics) => [...prevSelectedTopics, topic]);
    } else {
      setSelectedTopics((prevSelectedTopics) =>
        prevSelectedTopics.filter((selectedTopic) => selectedTopic !== topic)
      );
    }
  };

  useEffect(() => {
    onFilter(selectedTopics);
  }, [selectedTopics]);

  return (
    <div className='filter-container'>
      <h3>Filter By Topic:</h3>
      <label>
        <input type="checkbox" onChange={handleTopicChange} value="Study Skills" />
        Study Skills
      </label>
      <br />
      <label>
        <input type="checkbox" onChange={handleTopicChange} value="Mock Interview" />
        Mock Interview
      </label>
      <br />
      <label>
        <input type="checkbox" onChange={handleTopicChange} value="LeetCode Team Up" />
        LeetCode Team Up
      </label>
      <br />
      <label>
        <input type="checkbox" onChange={handleTopicChange} value="Activity Team Up" />
        Activity Team Up
      </label>
      <br />
      <label>
        <input type="checkbox" onChange={handleTopicChange} value="Project Team Up" />
        Project Team Up
      </label>
      <br />
      <label>
        <input type="checkbox" onChange={handleTopicChange} value="Research Team Up" />
        Research Team Up
      </label>
      <br />
      <label>
        <input type="checkbox" onChange={handleTopicChange} value="Study Foreign Languages" />
        Study Foreign Languages
      </label>
      <br />
      <label>
        <input type="checkbox" onChange={handleTopicChange} value="Find Job Team Up" />
        Find Job Team Up
      </label>
    </div>
  );
}

export default FilterColum;
