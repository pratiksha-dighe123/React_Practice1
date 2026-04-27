import { useState } from "react"


const App = () => {

  const [num, setNum] = useState(10)

  function changeNum(){
    setNum(20);
  }

  return (
    <div>
      <h1>The value of num is {num}</h1>
      <button onClick={changeNum}>Change num</button>
    </div>
  )
}

export default App
