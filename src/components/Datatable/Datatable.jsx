import React, { useState } from 'react'
import "./Datatable.css"
import DTtable from './DTCOMPS/DTtable'
export default function Datatable({DTname,limit}) {
  return (
    <div className='Datatable'>
        <div className="header">
            <p>{DTname}</p>
        </div>
        <DTtable limit={limit}/>
    </div>
  )
}
