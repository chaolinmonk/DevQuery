import React from 'react'
import './navbar.css';
import Navbaricon from './navbaricon';
import addIcon from '../../sources/add.svg'
import homeIcon from '../../sources/home.svg'
import chatIcon from '../../sources/chat.svg'
import exitIcon from '../../sources/exit.svg'
import mailIcon from '../../sources/mail.svg'
import ticketIcon from '../../sources/ticket.svg'
import userIcon from '../../sources/user.svg'
export default function Navbar() {
    return (
        <div className='navbar'>
            <div className='nb_options'>
                <Navbaricon ico = {addIcon} icoDesc="Añadir Tickets"/>
                <Navbaricon ico = {homeIcon} icoDesc="Incio"/>
                <Navbaricon ico = {chatIcon} icoDesc="Chat"/>
                <Navbaricon ico = {mailIcon} icoDesc="Tickets"/>
                <Navbaricon ico = {userIcon} icoDesc="Usuario"/>
                <Navbaricon ico = {exitIcon} icoDesc="Cerrar Sesión"/>
            </div>
        </div>
    )
}

