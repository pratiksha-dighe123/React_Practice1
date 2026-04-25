import React from 'react';
import './App.css';

const App = () => {

  return (
    <div>
      <div onMouseMove={()=>{
        console.log("Hiiiii");
       }} 
        className='box'>Hii</div>
    </div>
  )
}

export default App
