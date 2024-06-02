import React, { useState } from 'react';

export default function Button({ w = "fit-content", h = 30, cancel = false, text = "Button" }) {
  const [clicked, setClicked] = useState(false)
  const handleClick = () =>{
    setClicked(!clicked)
  }
  const btnstyle = {
    width: `${w}px`,
    height: `${h}px`,
    backgroundColor: cancel ? '#92b58a' : '#7eeda1',
    margin: '10px',
    border: '0px',
    borderRadius:'5px' 
  };

  return (
    <button type="button" style={btnstyle} onClick={handleClick}>
      {text}
    </button>
  );
}