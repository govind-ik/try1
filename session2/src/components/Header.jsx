import React, { useContext, useState } from 'react'
import { d } from '../context/UserContext.jsx';


//const [first, setfirst] = useState(second)
const Header = () => {
  const user=useContext(d);
  return (
    <>
        <nav className="navbar">
         // <h1>{user}</h1>
        </nav>
    </>
  )
}

export default Header