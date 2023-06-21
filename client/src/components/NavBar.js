import React from 'react';

import './NavBar.css';


function NavBar({onClickCreateGroupForm}) {
  const toggleCreateGroupForm = () => {
    onClickCreateGroupForm(true);
  };

  return (
      <div className="navbar">
        <div className="logo">Sbuddy</div>
        <button className="create-button" onClick={toggleCreateGroupForm}>Create Group</button>
      </div>
  );
}

export default NavBar;