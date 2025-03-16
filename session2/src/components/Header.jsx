import React, { useState } from 'react'
import { Link } from 'react-router-dom'


//const [first, setfirst] = useState(second)
const Header = () => {
  return (
    <>
        <nav className="navbar">
          <input placeholder='enter to search' ></input>
          <Link to='/'>Home</Link>
          <Link to='/About'>About</Link>
          <Link to='/Landing'>Landing</Link>
        </nav>
    </>
  )
}

export default Header