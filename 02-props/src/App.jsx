import React from 'react'
import Card from "./components/card"
import aditya from "./assets/aditya.jpeg"
import profile from "./assets/profile.jpeg"
import shravi from "./assets/shravi.jpeg"

const App = () => {
  return (
    <div className='parent'>
      <Card user="Aditya" age={20} img={aditya} />
      <Card user="Pratiksha" age={19} img={profile} />
      <Card user="Shravi" age={18} img={shravi}/>

    </div>
      
  )
}

export default App
