import React from 'react'
import "./Datatable.css"
import DTtable from './DTCOMPS/DTtable'
export default function Datatable(props) {
  return (
    <div className='Datatable'>
        <div className="header">
            <p>{props.DTname}</p>
        </div>
        <DTtable/>
    </div>
  )
}
