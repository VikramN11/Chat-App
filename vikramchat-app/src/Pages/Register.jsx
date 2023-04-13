import React from 'react';
import "../Style/register.scss";
import Add from "../images/fileimg.png"

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
            <input style={{display:"none"}} type="file" id='file' />
            <label htmlFor="file">
                <img src={Add} alt="fileimg" />
                <p>Add an Avatar</p>
            </label>
            <button>Register</button>
          </form>
          <p>You do have an account? Login</p>
        </div>
    </div>
  )
}

export default Register