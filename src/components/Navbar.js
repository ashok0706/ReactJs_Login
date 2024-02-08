import React, { useState } from 'react';

import './NavbarStyle.css';
// import './App.css';

const Navbar = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.email) {
      errors.email = 'Email is required';
      isValid = false;
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      errors.email = 'Invalid email address';
      isValid = false;
    }

    if (!formData.password) {
      errors.password = 'Password is required';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Perform login logic

      if (
        formData.email === 'ashok@gmail.com' &&
        formData.password === '12345'
      ) {
        console.log('Login successful!');
        alert('successfully logined');
        // Here you can perform additional actions like redirecting to another page or setting authentication state
      } else {
        setErrors({
          email: 'Invalid email or password',
          password: 'Invalid email or password',
        });
      }

      console.log('Form submitted:', formData);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <>
      <div className="title">ThinkLab LLC</div>
      <div className="navbar">
        <div className="logo">{/* <h2>LOGO</h2> */}</div>
        <div className="list">
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>Claints</a>
            </li>
            <li>
              <a>Contacts</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="form">
        <h2>Let`s Change The World</h2>
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          ></input>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          ></input>
          {errors.password && <span className="error">{errors.password}</span>}
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Navbar;
