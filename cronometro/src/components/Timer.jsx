import React from 'react'
import TimerDisplay from './TimerDisplay'
import TimerControls from './TimerControls'
import LapList from './LapList'
import './Timer.css'
import { useState, useEffect } from 'react'


const Timer = () => {

  const [milliseconds, setMilliseconds] = useState(0)
  const [timerOn, setTimeOn] = useState(false)
  const [laps, setLaps] = useState([])

  const formatTime = () => {
    const minutes = ("0" + Math.floor(milliseconds / 60000) % 60).slice(-2);
    const seconds = ("0" + Math.floor(milliseconds / 1000) % 60).slice(-2);
    const centiseconds = ("0" + Math.floor(milliseconds / 10) % 100).slice(-2);
  
    return `${minutes}:${seconds}:${centiseconds}`;

  };

  const startTimer = (interval) => {
    return setInterval(() => {
      setMilliseconds((prevMilliseconds) => prevMilliseconds + 10);
    }, 10);
  };

  const stopTimer = (interval) => {
    clearInterval(interval);
    return interval;
  };

  const resetTimer = () => {
    setMilliseconds(0);
    setTimerOn(false);
    setLaps([]);
  };

  const addLap = () => {
    setLaps([...laps, formatTime()]);
  };

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = startTimer(interval);
    } else {
      interval = stopTimer(interval);
    }

    return () => stopTimer(interval);
  }, [timerOn]);

  return <div className="timer-container">
    <TimerDisplay time={formatTime()} />
    <TimerControls
      timerOn={timerOn}
      onStart={() => setTimeOn(true)}
      onStop={() => setTimeOn(false)}
      onReset={resetTimer}
      onLap={addLap}
    />
    <LapList laps={laps} />

  </div>
}

export default Timer
