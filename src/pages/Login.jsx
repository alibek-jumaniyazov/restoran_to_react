import React, { useState } from 'react';
import "../styles/login.css"

import { FaUserAlt, FaEnvelope, FaLock } from 'react-icons/fa';

function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
      alert('Please fill in all fields.');
    } else if (password.length < 8) {
      alert('Password must be at least 8 characters.');
    } else {
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Password:', password);

      setIsSubmitted(true);
    }
  };

  return (
    <div className='registration-form-container'>
      {!isSubmitted ? (
        <form className='registration-form' onSubmit={handleSubmit}>
          <h2>Create an account</h2>
          <div className='form-group'>
            <label htmlFor='name'>
              <FaUserAlt />
            </label>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Name'
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>

          <div className='form-group'>
            <label htmlFor='email'>
              <FaEnvelope />
            </label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Email'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>

          <div className='form-group'>
            <label htmlFor='password'>
              <FaLock />
            </label>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='Password'
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>

          <button type='submit'>Sign up</button>
        </form>
      ) : (
        <div className='registration-success-container'>
          <h2>Success!</h2>
          <p>You have successfully signed up for our service.</p>
        </div>
      )}
    </div>
  );
}

export default Login;
