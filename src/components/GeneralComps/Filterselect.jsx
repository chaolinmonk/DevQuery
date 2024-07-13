import React from 'react'

export default function Filterselect(props) {
  const handleChange = (event) =>{
    props.onChange(event.target.value)
    console.log(event.target.value)
  }
  if(props.filtertype=== "limit"){
    return(
      <select name="" id="" className='Filterselect' onChange={handleChange}>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
        <option value="100">100</option>
        <option value="500">500</option>
      </select>
    )
  }
  return (
    <select name="" id="" className='Filterselect' onChange={handleChange}>
        <option value="Hola">Agregar Columna</option>
        <option value="Hola">HOla</option>
        <option value="Hola">HOla</option>
        <option value="Hola">HOla</option>
        <option value="Hola">HOla</option>
    </select>
  )
}
