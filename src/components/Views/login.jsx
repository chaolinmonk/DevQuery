import React from 'react'
import './home.css'
import Navbar from '../GeneralComps/navbar'
import Loginform from '../LoginComps/Loginform'
import './login.css';

export default function Login() {
  return (
    <div className='General'>
        <Navbar/>
        <div className='Loginform_container'>
          <Loginform login = {false} ></Loginform>
        </div>
    </div>
  )
}
