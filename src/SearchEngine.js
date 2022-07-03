import React from 'react';
import './SearchEngine.css';

export default function SearchEngine () {
 
    return (      
      <div className='SearchEngine'>
<form>
 <div className='row'>
  <div className='col-8'>
   <input type='search' placeholder='Enter a city...' className='form-control' autoFocus />
  </div>
  <div className='col-4'>
   <button type='submit' className='btn btn-dark w-100'>Search</button>
  </div>
 </div>
</form>
</div>
    );
}