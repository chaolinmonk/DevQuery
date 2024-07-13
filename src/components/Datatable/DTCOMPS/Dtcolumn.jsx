import React, { useRef } from 'react';
import "./DTcolumn.css";

export default function Dtcolumn({data,link=false, sendData}) {
  const ticketRef = useRef(null)
  const handleclick = ()=>{
    if (ticketRef.current) {
      console.log(ticketRef.current.textContent);
      localStorage.setItem('selectedTicket', ticketRef.current.textContent);
    }
  }
  const DTcolumn = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "200px",
    height: "100%",
    whiteSpace: 'wrap',
    overflow:'hidden',
    textOverflow: 'ellipsis',
  }
  if(link){
    return(
      <div onClick={handleclick} className='DTcolumn' style={DTcolumn}>
        <a ref={ticketRef} href="Tickets" className='DTcolumn-text'>{data}</a>
      </div>
    )
  }else{
    return (
      <div className='DTcolumn' style={DTcolumn}>
        <p className='DTcolumn-text'>{data}</p>
      </div>
    );
  }
}
