// src/components/Auth/Register.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Css/Register.css';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h2>Crear Cuenta</h2>
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
      <div className="form-group password-group">
        <label>Pass Again</label>
        <input 
          type="password" 
          name="confirmPassword" 
          value={formData.confirmPassword}
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
          required
        />
      </div>
      <button type="submit" className="auth-btn">Register</button>
      <div className="auth-footer">
        <a href="/login">¿Ya tienes cuenta? Inicia sesión</a>
      </div>
    </form>
  );
};

export default Register;