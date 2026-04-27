import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(10);

  const btnClicked= ()=>{
    setNum (20);
  }

  return (
    <div>
      <h3>{num}</h3>
      <button onClick={btnClicked}>Click Me</button>
    </div>
  )
}

export default App
