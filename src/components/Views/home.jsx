import React from 'react'
import Navbar from '../GeneralComps/navbar'
import Filterbar from '../GeneralComps/filterbar'
import Datatable from '../Datatable/Datatable'
import './home.css'
export default function Home() {
  return (
    <div className='General'>
        <Navbar/>
        <Filterbar/>
        <Datatable/>
    </div>
  )
}
