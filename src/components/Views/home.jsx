import React, { useState } from 'react'
import Navbar from '../GeneralComps/navbar'
import Filterbar from '../GeneralComps/filterbar'
import Datatable from '../Datatable/Datatable'
import Chat from '../chat/chat'
import './home.css'
export default function Home() {  // Asegúrate de recibir sendData como una función aquí
  const [selectLimit, setSelectLimit] = useState('');

  const handleSelectedValueChange = (value) => {
    setSelectLimit(value);
    console.log('Valor seleccionado en ParentComponent:', value);
  };

  return (
    <div className='General'>
      <Chat />
      <Navbar userName="Diego Quioza" userType="Administrador" />
      <Filterbar onSelectedValueChange={handleSelectedValueChange} />
      <Datatable DTname="Tickets" limit={selectLimit} />
    </div>
  );
}
