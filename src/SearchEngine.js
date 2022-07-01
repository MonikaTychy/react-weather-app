import React from 'react';
import './SearchEngine.css';

export default function SearchEngine () {
    return (      
<form className='SearchEngine'>
 <div className='row'>
  <div className='col-8'>
   <input type='search' placeholder='Enter a city...' />
  </div>
  <div className='col-4'>
   <button type='submit' className='btn btn-dark'>Search</button>
  </div>
 </div>
</form>
    );
}