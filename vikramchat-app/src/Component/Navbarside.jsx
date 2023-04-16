import React from 'react';
import avatar from "../images/my-avatar.jpg"

const Navbarside = () => {
  return (
    <div className='navbarside'>
      <span className='logo'>Vikram Chat</span>
      <div className='profilenav'>
        <div className='avatar'>
            <img src={avatar} alt="thomas" />
        </div>
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbarside