import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './navbar.css';
import Useroption from './Useroption';
export default function Navbar(props) {
    const [expanded,setExpanded] = useState(false);
    const expand = () =>{
        setExpanded(!expanded)
        console.log("expandex")
    }
    return (
        <div className={`navbar ${expanded ? 'expanded' : ''}`}>
            <div className='MenuToggle'>
                <Link to="/User" className='profile'>
                    <div className='profile_picture'>
                        <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="User / User_02">
                                <path id="Vector" d="M20 21C20 18.2386 16.4183 16 12 16C7.58172 16 4 18.2386 4 21M12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13Z" stroke="#504b51" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                        </svg>
                    </div>
                    <div className='profile_details'>
                        <p className='userName'>{props.userName}</p>
                        <p className='userType'>{props.userType}</p>
                    </div>
                </Link>
                <button className="hamMenu" type="button" onClick={expand}>
                    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="bars">
                        <path fill="#616161" d="M20,11H4c-0.6,0-1,0.4-1,1s0.4,1,1,1h16c0.6,0,1-0.4,1-1S20.6,11,20,11z M4,8h16c0.6,0,1-0.4,1-1s-0.4-1-1-1H4C3.4,6,3,6.4,3,7S3.4,8,4,8z M20,16H4c-0.6,0-1,0.4-1,1s0.4,1,1,1h16c0.6,0,1-0.4,1-1S20.6,16,20,16z">
                        </path>
                    </svg>
                </button>
            </div>
            <div className='nb_options'>
                <Useroption name = "Home" where="/"/>
                <Useroption name = "Mis Tickets"/>
                <Useroption name = "Crear Ticket" where = "/Caso_crear"/>
                <Useroption name = "Cerrar sesión" where = "/Login"/>
            </div>
        </div>
    )
}

