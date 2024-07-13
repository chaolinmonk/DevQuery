import React from 'react'
import Dtcolumn from './Dtcolumn';
import "./DTrows.css"
export default function DtHeaderRows({content}) {
  const keys = Object.keys(content);
  console.log(keys)
  return (
    <div>
        <div className='Dtrow-header'>
        {keys.map((key, index) => (
          <Dtcolumn
            key={index}
            data={key}
          />
        ))}
      </div>
    </div>
  )
}
