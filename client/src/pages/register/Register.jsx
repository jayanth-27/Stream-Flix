import React, { useState } from 'react';
import './register.css';

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
    <div>
      <div className="register">
        <div className="top">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2880px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
          <button className="logIn">Sign In</button>
        </div>
        <div className="firstTime">
          <h1>Unlimited movies, TV shows, and more</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
          <div className="ready">
            {!showPasswordInput ? (
              <>
                <input
                  type="email"
                  className="email"
                  placeholder="Email address"
                  onChange={handleEmail}
                  value={email}
                />
                <button className="started" onClick={handleFinish}>
                  Get Started
                </button>
              </>
            ) : (
              <>
                <input
                  type="password"
                  className="email"
                  placeholder="Password"
                  onChange={handlePassword}
                  value={password}
                />
                <button className="started">Finish</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
