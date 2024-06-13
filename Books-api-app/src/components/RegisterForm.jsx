import React, { useState } from 'react';
import './Styles.css';
import '../App.css';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (name.length < 3 || name.length > 30) {
      newErrors.name = 'Name must be between 3 and 30 characters';
    }
    if (!email.includes('@')) {
      newErrors.email = 'Email must be valid';
    }
    if (password.length < 10 || !/[!@#$%^&*]/.test(password)) {
      newErrors.password = 'Password must be at least 10 characters long and include a special character';
    }
    if (password !== repeatPassword) {
      newErrors.repeatPassword = 'Passwords must match';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const userData = { name, email, password };
      localStorage.setItem('userData', JSON.stringify(userData));
      setSuccessMessage('Account created successfully!');
      setName('');
      setEmail('');
      setPassword('');
      setRepeatPassword('');
    }
  };

  return (
    <div className="register-page">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>
        {successMessage && <p className="success-message">{successMessage}</p>}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p className="error-message">{errors.name}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="error-message">{errors.email}</p>}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p className="error-message">{errors.password}</p>}
        <input
          type="password"
          placeholder="Repeat Password"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
        />
        {errors.repeatPassword && <p className="error-message">{errors.repeatPassword}</p>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default RegisterForm;
