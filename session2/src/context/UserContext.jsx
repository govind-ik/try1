import React, { createContext,useState } from 'react'

export const d=createContext();

const UserContext = ({children}) => {
    const [theme, setTheme] = useState("light")

    const toggle=()=>{
        setTheme((current)=>(current==='light')?'dark':'light')
    }
  return (
    <div>
        <d.Provider value={{theme,toggle}}>
            {children}
        </d.Provider>


    </div>
  )
}

export default UserContext