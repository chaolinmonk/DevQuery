import React from 'react'
import "./navbaricon.css"
export default function Navbaricon(props) {
    return (
      <a href="" className='navbar_icon_container'>
        <img className="navbar_icon_g" src= {props.ico} alt="icono" />
        <p className='navbar_icon_desc'>{props.icoDesc}</p>
      </a>
  )
}
