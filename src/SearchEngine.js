import React, { useState } from 'react';
import './SearchEngine.css';

export default function SearchEngine () {

    const [city, setCity] = useState ("");

    function handleSubmit (event) {
        event.preventDefault();
        alert (city);
    }

    function updateCity (event) {
      setCity(event.target.value);
    }
 
    return (      
      <div className='SearchEngine'>
<form onSubmit={handleSubmit}>
 <div className='row'>
  <div className='col-8'>
   <input type='search' placeholder='Enter a city...' className='form-control' autoFocus onChange={updateCity}/>
  </div>
  <div className='col-4'>
   <button type='submit' className='btn btn-dark w-100'>Search</button>
  </div>
 </div>
</form>
</div>
    );
}