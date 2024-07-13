import React, { useEffect, useRef, useState } from 'react';
import "./DTrows.css";
import Dtcolumn from "./Dtcolumn.jsx";

export default function DTrow({ content, client, prio, type, sendData }) {
  const [dataFromChild,setDataFromChild] = useState(null);
  const receiveData = (data) =>{
    setDataFromChild(data);
    console.log(data)
    sendData(data)
    
  }
  const keys = Object.keys(content);
  return (
    <div className='Dtrow'>
      {keys.map((key, index) => {
        if (key === 'ticketcliente') {
          const clienteId = content[key];
          const cliente = client.find(c => c.clienteid === clienteId);
          const clienteNombre = cliente ? `${cliente.clientenombre} ${cliente.clienteappaterno}` : '-';

          return (
            <Dtcolumn
              key={index}
              data={clienteNombre}
            />
          );
        }else if(key === 'ticketprioridad'){
          const prioridadId = content[key];
          const prioridad = prio.find(p => p.prioridadid === prioridadId);
          const prioridadglosa = prioridad ? prioridad.prioridadglosa :'-';
          return (
            <Dtcolumn
              key={index}
              data={prioridadglosa}
            />
          );
        }else if(key === 'tickettipo'){
          const tipoId = content[key];
          const tipo = type.find(p => p.tipoticketid === tipoId);
          const tipoticketnom = tipo ? tipo.tipoticketnom:'-';
          return (
            <Dtcolumn
              key={index}
              data={tipoticketnom}
            />
          );
        
        }else if(key === 'ticketficid'){

          return (
            <Dtcolumn
              key={index}
              data={content[key]}
              link={true}
              sendData={receiveData}
            />
          );
        }else {
          return (
            <Dtcolumn
              key={index}
              data={content[key]}
            />
          );
        }
      })}
    </div>
  );
}
