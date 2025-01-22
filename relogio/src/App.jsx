import { useState, useEffect } from 'react'
import TimeZoneClock from './Components/TimeZoneClock';

function App() {
  const fusosHorarios = [
    "UTC",
    "GMT",
    "America/New_York",
    "America/Chicago",
    "America/Denver",
    "America/Los_Angeles",
    "Europe/London",
    "Europe/Berlin",
    "Asia/Tokyo",
  ];

  const fusoHorarioLocal = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const [fusosHorariosSelecionados, setFusosHorariosSelecionados] = useState([
    fusoHorarioLocal,
  ]);

 const addFusoHorario = (e) => {
  const newFuso = e.target.value;
  if(!fusosHorariosSelecionados.includes(newFuso)) {
    setFusosHorariosSelecionados([...fusosHorariosSelecionados, newFuso]);
  }
 }

  return (
    <div>
      <h1>Relógio Mundial</h1>
      <select onChange={(e) => addFusoHorario(e)}>
        <option value="" disabled select>
          Selecione um Fuso Horário
        </option>
        {fusosHorarios.map((fuso) => (
          <option key={fuso} value={fuso}>
            {fuso}
            </option>
        ))}
      </select>

      <div>
        {fusosHorariosSelecionados.map((fuso) => (
          <TimeZoneClock key={fuso} timeZone={fuso} />
        ))}
      </div>
    </div>
  );
}

export default App
