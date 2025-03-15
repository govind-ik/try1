import React from 'react'

const Cards = (props) => {
    console.log(props)
  return (
    <div class="card">
  <h2 class="name">{props.name}</h2>
  <p class="profession">{props.profession}</p>
  <p class="city">{props.city}</p>
</div>

  )
}

export default Cards