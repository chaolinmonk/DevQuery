import React from 'react'
import "./home.css"
import "./Caso_crear.css"
import Navbar from '../GeneralComps/navbar'
import Button from '../GeneralComps/button'
import Input from '../GeneralComps/Input'
import InputFile from '../GeneralComps/InputFIle/InputFIle'
export default function Caso_crear() {
  return (
    <div className='General'>
        <Navbar userName="Diego Quioza" userType="Administrador"/>
        <div id="ticketform">
            <div id="ticketformcontent">
                <p>Resumen</p>
                <Input Iwidth={"99%"}/>
                <p>Tipo</p>
                <select name="" id="">
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                </select>
                <p>Subtipo</p>
                <Input Iwidth={"99%"}/>
                <InputFile/>
                <Button text='Crear Caso'/> 
            </div>
        </div>
    </div>
  )
}
