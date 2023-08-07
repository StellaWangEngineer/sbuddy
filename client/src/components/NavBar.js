import React from 'react';

import './NavBar.css';


function NavBar({onClickCreateGroupForm}) {
  const toggleCreateGroupForm = () => {
    onClickCreateGroupForm(true);
  };

  return (
      <div className="navbar">
        <div className='left-container'>
          <div className="logo">Sbuddy</div>
          <div className="slogan"> | Find your study buddy</div>
        </div>
        <button className="create-button" onClick={toggleCreateGroupForm}>Create Group</button>
      </div>
  );
}

export default NavBar;