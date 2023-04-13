import React from 'react';
import "../Style/register.scss";

const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
          <span className='logo'>Vikram Chat</span>
          <span className='title'>Register</span>
          <form>
            <input type="text" placeholder='Enter Name' />
            <input type="text" placeholder='Enter Email' />
            <input type="text" placeholder='Enter Password' />
            <input type="text" placeholder='Enter Confirm Password' />
            <button>Register</button>
          </form>
        </div>
    </div>
  )
}

export default Register