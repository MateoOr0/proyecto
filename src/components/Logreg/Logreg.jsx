import React, { useState } from 'react';
import '../Logreg/Logreg.css';

const Logreg = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [emailFormatError, setEmailFormatError] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // Lógica para manejar el inicio de sesión
    console.log(`Iniciar sesión - Email: ${loginEmail}, Contraseña: ${loginPassword}`);

    // Limpiar campos y mostrar mensaje de éxito
    setLoginEmail('');
    setLoginPassword('');
    setLoginSuccess(true);

    // Limpiar el mensaje después de 3 segundos (3000 milisegundos)
    setTimeout(() => {
      setLoginSuccess(false);
    }, 3000);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    // Verificación automática del formato de correo electrónico por el navegador
    if (!validateEmail(registerEmail)) {
      setEmailFormatError(true);

      // Limpiar el mensaje de error después de 3 segundos (3000 milisegundos)
      setTimeout(() => {
        setEmailFormatError(false);
      }, 3000);

      return;
    }

    // Verificación de contraseñas en el frontend
    if (registerPassword !== confirmPassword) {
      setPasswordsMatch(false);

      // Limpiar el mensaje de error después de 3 segundos (3000 milisegundos)
      setTimeout(() => {
        setPasswordsMatch(true);
      }, 3000);

      return;
    }

    // Lógica para enviar la información al backend o manejar el registro
    console.log(`Registro - Usuario: ${registerUsername}, Email: ${registerEmail}, Contraseña: ${registerPassword}`);

    // Limpiar campos y mostrar mensaje de éxito
    setRegisterUsername('');
    setRegisterEmail('');
    setRegisterPassword('');
    setConfirmPassword('');
    setRegisterSuccess(true);

    // Limpiar el mensaje después de 3 segundos (3000 milisegundos)
    setTimeout(() => {
      setRegisterSuccess(false);
    }, 3000);
  };

  const validateEmail = (email) => {
    // Verificar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
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
          {loginSuccess && <p className="success-message">Inicio de sesión exitoso</p>}
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
            {!passwordsMatch && <p className="error-message">Las contraseñas no coinciden.</p>}
          </div>
          <button className="registerbot" onClick={handleRegister}>
            Registrarse
          </button>
          {emailFormatError && <p className="error-message">El formato del correo electrónico es incorrecto.</p>}
          {registerSuccess && <p className="success-message">Registro exitoso</p>}
        </div>
      </div>
    </main>
  );
};

export default Logreg;
