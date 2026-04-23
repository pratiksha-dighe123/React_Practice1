import React from 'react'
import Card from './components/card'
import Greet from './components/greet'

const App = () => {
const user=  'Sarthak';
  return (
    <div>
    <div className='card'>
      <h1>Welcome {user}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, odit.</p>
    </div>
    <Greet />
    <br></br>
    <Card />
  </div>
  )
}

export default App
