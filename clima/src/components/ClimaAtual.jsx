import React from 'react'

const ClimaAtual = ({ clima }) => {
  if (!clima) {
    return <p>Busque uma cidade para ver o clima atual.</p>;
  }

  
  return (
  <div>
    <h3>{clima.name}</h3>
    <img
        src={`http://openweathermap.org/img/wn/${clima.weather[0].icon}.png`}
        alt={clima.weather[0].description}
      />
    <p>{clima.main.temp}C</p>
    <p>{clima.weather[0].description}</p>
  </div>
  );
};

export default ClimaAtual
