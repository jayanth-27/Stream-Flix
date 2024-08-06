import React, { useState } from 'react';
import './login.css';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPasswordInput, setShowPasswordInput] = useState(false);

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  function handleFinish(event) {
    event.preventDefault(); // Prevent form submission
    if (email) {
      setShowPasswordInput(true);
    }
  }

  return (
      <div className="loggIn">
        <div className="top">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2880px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
        </div>
        <div className="form">
          <form>
            <h1>Sign In</h1>
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password'/>
            <button>Sign-In</button>
            <span>New to Netflix? <b>Sign up now.</b></span>
          </form>
        </div>
      </div>
  );
}
