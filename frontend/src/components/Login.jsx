import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make POST request to login endpoint
      const response = await axios.post('http://localhost:4000/api/login/', {
        email,
        password
      });

      // Check if login was successful (e.g., response status code is 200)
      if (response.status === 200) {
        // Reset form fields after successful login
        setEmail('');
        setPassword('');

        // Update the isLoggedIn state to true
        setIsLoggedIn(true);

        // Save token to local storage for persistent login state
        localStorage.setItem('token', response.data.token);

        alert('Logged in successfully');
        
        // Redirect to home page
        window.location.href = '/';
      } else {
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error submitting:', error);
      alert('Failed to login');
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" value={email} onChange={(e) => setEmail(e.target.value)} aria-describedby="emailHelp"/>
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} id="exampleInputPassword1"/>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>    
    </div>
  );
}

export default Login;
