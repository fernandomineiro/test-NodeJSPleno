import React, { useState, useEffect } from 'react';
import App from './App';

// API key of the google map
const MinhaKeyAqui = 'Minha key secreta aqui';

// load google map script
const loadGoogleMapScript = (callback) => {
  if (typeof window.google === 'object' && typeof window.google.maps === 'object') {
    callback();
  } else {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${MinhaKeyAqui}`;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener("load", callback);
  }
}

const Maps = () => {
  const [loadMap, setLoadMap] = useState(false);

  useEffect(() => {
    loadGoogleMapScript(() => {
      setLoadMap(true)
    });
  }, []);

  return (
    <div className="App">
      {!loadMap ? <div>Carregando...</div> : <App />}
      <br/>
    </div>
  );
}

export default Maps;