import React, { useState } from 'react';
import './filterbar.css';
import Searchbar from './Searchbar';
import Filterselect from './Filterselect';

export default function Filterbar(props) {
  const [selectedValue, setSelectedValue] = useState('');
  const handleFilterChange = (value) => {
    setSelectedValue(value);
    props.onSelectedValueChange(value);
    console.log(value);
  };

  return (
    <div className='filterbar'>
      <div className="filterpanel">
        <Searchbar />
        <Filterselect filtertype="limit" onChange={handleFilterChange} />
      </div>
    </div>
  );
}