import React, { useState, useRef } from 'react';
import './UserForm.css';

const UserForm = () => {
  const [name, setName] = useState('');
  const emailRef = useRef(null);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    const email = emailRef.current.value;
    console.log('Name:', name);
    console.log('Email:', email);
  };

  const handleValidation = () => {
    if (name.length < 3) {
      setError('Name must be at least 3 characters long');
    } else {
      setError('');
    }
  };

  return (
    <div className="user-form">
      <label>
        Name:
        <input type="text" value={name} onChange={handleChange} onBlur={handleValidation} />
      </label>
      {error && <span className="error">{error}</span>}
      <label>
        Email:
        <input type="text" ref={emailRef} />
      </label>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default UserForm;
