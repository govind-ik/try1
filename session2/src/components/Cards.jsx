import React from 'react'

const Cards = (props) => {
    console.log(props)
  return (
    <div>
        <h1>{props.user}</h1>
        <h2>{props.class}</h2>
        <h3>{props.city}</h3>
    </div>
  )
}

export default Cards