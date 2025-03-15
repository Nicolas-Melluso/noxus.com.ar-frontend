// src/components/Auth/Login.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
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
    const url = "http://147.93.35.119:3000/transactions/";
    
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
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Iniciar Sesión</h2>
      <div className="form-group">
        <label>Username</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>
      <div className="form-group">
        <label>Password </label>
        <input 
          type="password" 
          name="password" 
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />
      </div>
      <button type="submit" className="auth-btn">Enter</button>
      <div className="auth-footer">
        <a href="/register">¿No tienes cuenta? Regístrate</a>
      </div>
    </form>
  );
};

export default Login;