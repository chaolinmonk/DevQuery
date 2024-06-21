import React from 'react'
import Navbar from '../GeneralComps/navbar'
import Filterbar from '../GeneralComps/filterbar'
import Datatable from '../Datatable/Datatable'
import Chat from '../chat/chat'
import './home.css'
export default function Home() {
  return (
    <div className='General'>
        <Navbar/>
        <Filterbar/>
        <Datatable DTname = "Table"/>
        <Chat></Chat>
    </div>
  )
}
