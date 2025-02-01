import './Button.css';

// eslint-disable-next-line
import React from 'react'
// eslint-disable-next-line
//back-btn
const Button = ({id, text, action}) => {
  const handleAction = (e) => {
    action(e);

  }
  return <button id={id} onClick={handleAction}>{text}</button>
  
}

export default Button
