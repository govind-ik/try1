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
  // const name="govind";
  // const clas="14";
  // const city="prayagraj"

  const user1=[
    {
      "name": "John Doe",
      "profession": "Software Engineer",
      "city": "New York, USA"
    },
    {
      "name": "Alice Smith",
      "profession": "Graphic Designer",
      "city": "Los Angeles, USA"
    },
    {
      "name": "Rahul Sharma",
      "profession": "Data Scientist",
      "city": "Bangalore, India"
    },
    {
      "name": "Sophia Martinez",
      "profession": "Marketing Manager",
      "city": "Toronto, Canada"
    },
    {
      "name": "Liam O'Connor",
      "profession": "Cybersecurity Analyst",
      "city": "Dublin, Ireland"
    }
  ]
  

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
     <div>
      {user1.map(function(e){
        return <Cards name={e.name} profession={e.profession} city={e.city} />
      })}
     </div>
      
     

    </div>
  )
}

export default App