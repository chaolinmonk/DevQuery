import React, { useState } from 'react';
import "./button.css"
export default function Button({ w = "fit-content", h = 30, cancel = false, text = "Button" , func , bgc = "rgb(247, 148, 103)"}) {
  const stle={
    backgroundColor : `${bgc}`
  }

  return (
    <button className='gbutton' type="button" onClick={func}>
      {text}
    </button>
  );
}