import React from 'react';
import "../Style/register.scss";

const Login = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
          <span className='logo'>Vikram Chat</span>
          <span className='title'>Login</span>
          <form>
            <input type="text" placeholder='Enter Email' />
            <input type="text" placeholder='Enter Password' />
            <button>Login</button>
          </form>
          <p>You do not have an account? Register</p>
        </div>
    </div>
  )
}

export default Login