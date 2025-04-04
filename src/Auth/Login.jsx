// src/components/Auth/Login.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa'
import './Css/Login.css';

const Login = (url) => {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData.email, formData.password);
    
    const response = await validationWithBackend(formData.email, formData.password);

    navigate(url);
  };

  const validationWithBackend = async (user, pass) => {
    const url = "https://api.noxus.com.ar/transactions";  // Sin puerto y sin "/"
    
    try {
      const response = await fetch(url);
      if (!response.ok) {

      }
  
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div className="wrapper">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="form-group">
          <input 
            type="email" 
            name="email" 
            value={formData.email}
            placeholder='username'
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <FaUser className='icon' />
        </div>
        <div className="form-group">
          <input 
            type="password" 
            name="password" 
            value={formData.password}
            placeholder='password'
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
          <FaLock className='icon' />
        </div>

        <div className="remember-forgot">
          <label><input type="checkbox" />Remember me</label>
          <a href="#">Forgot password?</a>
        </div>

        <button type="submit">Login</button>
        
        <div className="register-link">
          <p> 
            Don't have an account? <a href="/register"> Register </a>
          </p>
        </div>
      </form>
    </div>
    
  );
};

export default Login;