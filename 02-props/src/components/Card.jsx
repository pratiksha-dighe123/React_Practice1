import React from 'react'

const Card = (props) => {

  return (
    <div className="card">
        <img src={props.img} alt="profile"/>
        <h1>{props.user}, {props.age}</h1>
        <p>A fresher Java Full Stack Developer</p>
        <button>View Profile</button>
      </div>
  )
}

export default Card
