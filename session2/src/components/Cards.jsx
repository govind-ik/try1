import React from 'react'

const Cards = (props) => {
    console.log(props)
  return (
    <div className='card'>
      <img src={props.photo}/>
      
    </div>

  )
}

export default Cards