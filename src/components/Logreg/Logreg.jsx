import React, { useState } from 'react';
import axios from 'axios';
import '../Logreg/Logreg.css';

const Logreg = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/login', {
        email: loginEmail,
        password: loginPassword,
      });

      console.log('Respuesta del servidor (login):', response.data);
    } catch (error) {
      console.error('Error en el inicio de sesión:', error.response.data);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/register', {
        username: registerUsername,
        email: registerEmail,
        password: registerPassword,
      });

      console.log('Respuesta del servidor (registro):', response.data);
    } catch (error) {
      console.error('Error en el registro:', error.response.data);
    }
  };

  return (
    <main>
      <div className="login">
        <div className="loginform">
          <h2 className="titlereg">Iniciar sesión</h2>
          <div className="form">
            <label htmlFor="loginemail">Email:</label>
            <input
              type="email"
              id="loginemail"
              placeholder="Ingresa tu Email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
          </div>
          <div className="form">
            <label htmlFor="loginpassword">Contraseña:</label>
            <input
              type="password"
              id="loginpassword"
              placeholder="Ingresa tu contraseña"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
          </div>
          <button className="loginbot" onClick={handleLogin}>
            Iniciar sesión
          </button>
        </div>

        <div className="registerform">
          <h2 className="titlereg">Registro</h2>
          <div className="form">
            <label htmlFor="registerusername">Nombre de usuario:</label>
            <input
              type="text"
              id="registerusername"
              placeholder="Ingresa tu nombre de usuario"
              value={registerUsername}
              onChange={(e) => setRegisterUsername(e.target.value)}
            />
          </div>
          <div className="form">
            <label htmlFor="registeremail">Email:</label>
            <input
              type="email"
              id="registeremail"
              placeholder="Ingresa tu Email"
              value={registerEmail}
              onChange={(e) => setRegisterEmail(e.target.value)}
            />
          </div>
          <div className="form">
            <label htmlFor="registerpassword">Contraseña:</label>
            <input
              type="password"
              id="registerpassword"
              placeholder="Ingresa tu contraseña"
              value={registerPassword}
              onChange={(e) => setRegisterPassword(e.target.value)}
            />
          </div>
          <div className="form">
            <label htmlFor="registerpassword2">Repite contraseña:</label>
            <input
              type="password"
              id="registerpassword2"
              placeholder="Ingresa tu contraseña nuevamente"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button className="registerbot" onClick={handleRegister}>
            Registrarse
          </button>
        </div>
      </div>
    </main>
  );
};

export default Logreg;
