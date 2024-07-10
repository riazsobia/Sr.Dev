import React from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../../auth/auth';
import './LoginScreen.css';

export const LoginScreen = () => {

  // useDispatch es un hook que nos permite usar el dispatch de redux
  const dispatch = useDispatch();

  // handleLogin es una función que se ejecuta al hacer click en el botón de login y que llama a la función login de auth.js
  const handleLogout = () => {
    dispatch(login)
  }

  return (
    <div className="login-container">
      <div className="login-box animate__animated animate__fadeIn">
          <h1 className="login-text">Login</h1>
          <button
            className="login-button"
            onClick={handleLogout} 
            >
            Login
          </button>
      </div>
       

    </div>
    
  )
}
