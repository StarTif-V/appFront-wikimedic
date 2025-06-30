import React, { useState } from 'react';
import './App.css';
import doctorImage from './doctor.png'; // Agrega la imagen del doctor en la carpeta src

function App() {
  const [showFooterMessage, setShowFooterMessage] = useState(true);

  const handleAccept = () => {
    setShowFooterMessage(false);
  };

  return (
    <div className="App">
      <header className="header">
        <h1>¿QUÉ ES WIKIMEDIC?</h1>
        <p>
          Aquí encontrarás información precisa y verificada sobre los principios activos más comunes utilizados
          para tratar diversas molestias y enfermedades. Nuestro compromiso es ofrecerte contenido confiable
          para que puedas tomar decisiones informadas sobre tu salud.
        </p>
        <div className="buttons">
          <button><span role="img" aria-label="search">🔍</span> MEDICINA</button>
          <button><span role="img" aria-label="search">🔍</span> SÍNTOMA</button>
        </div>
      </header>

      <div className="image-container">
        <img src={doctorImage} alt="Doctora" />
      </div>

      {showFooterMessage && (
        <footer className="footer-warning">
          <p>
            La información presentada en esta página es únicamente con fines informativos y educativos.
            No debe considerarse un sustituto de una consulta médica profesional, diagnóstico o tratamiento.
          </p>
          <button className="accept-btn" onClick={handleAccept}>ACEPTAR</button>
        </footer>
      )}
    </div>
  );
}

export default App;
