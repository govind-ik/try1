import React, { useState,useEffect, useContext } from 'react'
import Cards from './components/Cards.jsx';
import axios from 'axios';
//import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx'
import Landing from './pages/Landing.jsx'
import Header from './components/Header.jsx';
import { d } from './context/UserContext.jsx';


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

  // const user1=[
  //   {
  //     "name": "John Doe",
  //     "profession": "Software Engineer",
  //     "city": "New York, USA"
  //   },
  //   {
  //     "name": "Alice Smith",
  //     "profession": "Graphic Designer",
  //     "city": "Los Angeles, USA"
  //   },
  //   {
  //     "name": "Rahul Sharma",
  //     "profession": "Data Scientist",
  //     "city": "Bangalore, India"
  //   },
  //   {
  //     "name": "Sophia Martinez",
  //     "profession": "Marketing Manager",
  //     "city": "Toronto, Canada"
  //   },
  //   {
  //     "name": "Liam O'Connor",
  //     "profession": "Cybersecurity Analyst",
  //     "city": "Dublin, Ireland"
  //   }
  // ]
  // const [d, setData] = useState([])
  // const f=async()=>{
  //   const resp=await axios.get('https://picsum.photos/v2/list?page=2&limit=10');
  //   setData(resp.data);
  //   console.log(d);
   

  // }
  // useEffect(() => {
  //   console.log(data); // ✅ This will log the updated state after it changes
  // }, [data]);
  
 //error is we are never calling function jo ki krega to agar f ko hata de to chal jayega wrna ek button bna lete h on click pe chle.

  const {theme,toggle}=useContext(d);
  

  return (
    
//     <div>
//       {/* <Header/>
//       //<Header/>
//       <h1>chal rha h ki v nhi</h1>
//       <form onSubmit={(e)=>{
//         fun1(e)
//       }}>
      
//       <input placeholder='enter' value={user} onChange={(e)=>{
//         setUser(e.target.value)
//       }}></input>
//       <button>press</button>
//       </form>
//       */}
//      {/* <div>
//       {user1.map(function(e){
//         return <Cards name={e.name} profession={e.profession} city={e.city} />
//       })}
//      </div> */}
//      <button onClick={f}>get data</button>
//      {d.map(function(e,idx){
//       return <div key={idx}>
//         <Cards photo={e.
// download_url} />

//         </div>
//      })}
      
     

//     </div>
//   
// {/* <div>
//   <Header/>
//   <Routes>
//     <Route path='/' element={<Home/>} />
//     <Route path='/About' element={<About/>}/>
//     <Route path='/Landing' element={<Landing/> } />

//   </Routes>
// </div> */}
<div style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "60vh",
        textAlign: "center",
      }}>
  <button onClick={toggle}> colour changes</button>

</div>


)
}

export default App