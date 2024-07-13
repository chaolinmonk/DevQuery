import React, { useState, useEffect } from 'react';
import "./DTtable.css";
import DtHeaderRows from './DTHeaderrows';
import DTrow from "./DTrows";
import axios from 'axios';

export default function DTtable({ limit , sendData}) {
  const token = localStorage.getItem('token');
  const [rowData, setRowData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cliente, setCLiente] = useState([]);
  const [prio, setPrioridad] = useState([]);
  const [tipo, setTipo] = useState([]);
  const [dataFromChild,setDataFromChild] = useState(null);
  const receiveData = (data) =>{
    setDataFromChild(data);
    console.log(data)
    sendData(data)
  }
  console.log(limit,"the data")
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [ticketResponse, clienteResponse, prioridadResponse, tipoResponse] = await Promise.all([
          axios.get(`http://127.0.0.1:8000/ticket/`,{
              headers:{
                'authorization': `token ${token}`
              }
            }
          ),
          axios.get(`http://127.0.0.1:8000/cliente/`),
          axios.get(`http://127.0.0.1:8000/prioridad/`),
          axios.get(`http://127.0.0.1:8000/tipoticket/`),
        ]);
        setRowData(ticketResponse.data);
        setCLiente(clienteResponse.data);
        setPrioridad(prioridadResponse.data);
        setTipo(tipoResponse.data)
        console.log("hola",cliente)
        console.log(prio)
        console.log(tipo)

        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [limit]); // Dependencia limit para controlar cuándo se debe ejecutar el efecto

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='DTtable'>
      <DtHeaderRows content={rowData[0]} /> {/* Asumiendo que rowData[0] es el encabezado */}
      {rowData.slice(0, limit).map((item, idx) => (
        <DTrow sendData={receiveData} key={idx} content={item} client={cliente} prio={prio} type={tipo} />
      ))}
    </div>
  );
}
