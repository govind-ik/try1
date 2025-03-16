import React from 'react'

const Cards = (props) => {
    console.log(props)
  return (
    <div className='card'>
      <img src={props.photo} className='ii'/>
      
    </div>

  )
}

export default Cards