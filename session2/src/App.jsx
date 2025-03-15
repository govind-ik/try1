import React, { useState } from 'react'
import Cards from './components/Cards.jsx';



const App = () => {
  //const [user, setUser] = useState('')
  //username=user;
  // const fun1=(e)=>{
  //   e.preventDefault();
    
  //   console.log(user);
  //   setUser('')
  // }
  return (
    <div>
      {/* <Header/>
      //<Header/>
      <h1>chal rha h ki v nhi</h1>
      <form onSubmit={(e)=>{
        fun1(e)
      }}>
      
      <input placeholder='enter' value={user} onChange={(e)=>{
        setUser(e.target.value)
      }}></input>
      <button>press</button>
      </form>
      */}
      <div className="car">
        <Cards user='govind' class='14' city='prayagrag'/>
      </div>
      
    </div>
  )
}

export default App