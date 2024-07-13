import React, { useEffect, useState } from 'react';
import Navbar from '../GeneralComps/navbar';
import Button from '../GeneralComps/button';
import axios from 'axios';
import "./home.css";
import "./tickets.css";

export default function Tickets() {
  const [estado, setEstado] = useState(true);
  const [rowData, setRowData] = useState(null); // Cambiado a null para manejar la carga inicial
  const [cliente, setCliente] = useState({});
  const [prioridad, setPrioridad] = useState({});
  const [estadoActual, setEstadoActual] = useState({});
  const [tipo, setTipo] = useState({});

  const savedTicket = localStorage.getItem('selectedTicket');
  const token = localStorage.getItem('token');

  //Funcion de boton
  function avanzarEstado(id, idticket) {
    id++;
    axios.post(`http://127.0.0.1:8000/ticket/`,
      {
        "ticketid": idticket,
        "estadoticket": id,
        "estadoticketcomentario": "Creación de Ticket"
      }
    )
  }
  function retrocederEstado(id) {
    id--;
    return id 
  }
  function anulado(id) {
    id = 5;
    return id
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          ticketResponse,
          clienteResponse,
          prioridadResponse,
          tipoResponse,
          estadoResponse,
        ] = await Promise.all([
          axios.get(`http://127.0.0.1:8000/ticket/`,{
              headers:{
                'Authorization' : `token ${token}`
              }
            }
          ),
          axios.get(`http://127.0.0.1:8000/cliente/`),
          axios.get(`http://127.0.0.1:8000/prioridad/`),
          axios.get(`http://127.0.0.1:8000/tipoticket/`),
          axios.get(`http://127.0.0.1:8000/estado/`),
        ]);

        // Filtrar el ticket que coincida con savedTicket
        const filteredTicket = ticketResponse.data.find(ticket => ticket.ticketficid === savedTicket);
        const filteredType = tipoResponse.data.find(tipo => tipo.tipoticketid === filteredTicket.tickettipo);
        const filteredClient = clienteResponse.data.find(cliente => cliente.clienteid === filteredTicket.ticketcliente);
        const filteredPriority = prioridadResponse.data.find(prior => prior.prioridadid === filteredTicket.ticketprioridad);

        if (filteredTicket) {
          setRowData(filteredTicket);
          setCliente(filteredClient);
          setPrioridad(filteredPriority);
          setTipo(filteredType);
          
          try {
            const estadoActualResponse = await axios.get(`http://127.0.0.1:8000/estadoTicketAct/${filteredTicket.ticketid}`);
            const filteredEstado = estadoResponse.data.find(estado => estado.estadoid === estadoActualResponse.data.estadoticket);
            setEstadoActual(estadoActualResponse.data);
            setEstado(filteredEstado);
          } catch (error) {
            console.log("Error al obtener el estado actual del ticket:", error);
          }
        } else {
          console.log(`No se encontró ningún ticket con el ticketficid ${savedTicket}`);
        }
      } catch (error) {
        console.log("Error en la carga de datos:", error);
      }
    };

    if (savedTicket) {
      fetchData();
    }
  }, [savedTicket]); // Asegúrate de incluir savedTicket como dependencia para que se actualice cuando cambie

  // Renderizar un mensaje de carga mientras se obtienen los datos
  if (!rowData) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <div className='General'>
        <Navbar userName="Diego Quioza" userType="Administrador"/>
        
        <div id="TicketContent">
          <div id="Ticketdata">
            <div id="data1">
              <div id="TicketName">Ticket id: {rowData.ticketficid}</div>
              <div id="details">
                <p id="details_paragraph">
                  {rowData.ticketdesc}
                </p>
                <p>Estado: {estado.estadonom}</p>
                <p>Tipo: {tipo.tipoticketnom}</p>
                <p>Tiempo restante: {rowData.remainingTime}</p>
                <p>Prioridad: {prioridad.prioridadglosa}</p>
              </div>
              <div id="fileUpload">
                <div id="files"></div>
                <div id="fileInput">
                  <input type="file" name="hola" id="" />
                </div>
              </div>
            </div>
            <div id="data2">
              <div id="ticketSideDetails">
                <p>Asignado a: {cliente.clientenombre} {cliente.clienteappaterno}</p>
                <p>Creador del Caso: {cliente.clientenombre} {cliente.clienteappaterno}</p>
                <Button text={"test"} func={avanzarEstado}/>
                <Button text={"test"} func={retrocederEstado}/>                
                <Button text={"test"} func={anulado}/>                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
