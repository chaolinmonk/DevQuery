import React from 'react'
import "./DTtable.css"
import DTcolumn from "./Dtcolumn"
export default function DTtable() {
  return (
    <div className='DTtable'>
      <DTcolumn></DTcolumn>
      <DTcolumn></DTcolumn>
      <DTcolumn></DTcolumn>
    </div>
  )
}
