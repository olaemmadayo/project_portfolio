//useContext() = React Hook that allows you to share values between
//               multiple level of components without passing props
//               through each level.

// PROVIDER COMPONENT
//1. import {createContext} from "react"
//2. export const MyContext = createcontext();
//3. <MyContext.Provider value={value}>
//      <Child />
//   </MyContext.Provider>

// CONSUMER COMPONENTS
//1. import React, {useContext} from "react";
//    import {MyContext} from "./ComponentA";
//2. const value = useContext(MyContext);

import React, { useState, createContext } from 'react'
import '../styles/useContext.css'
import UseContextB from './UseContextB'

export const UserContext = createContext();


const UseContextA = () => {
  const [user, setUser] = useState("Temidayo")
  
  return (
    <div className='box'>
      <h1>UseContextA</h1>
      <h2>{`Hello ${user}`}</h2>
      <UserContext.Provider value={user}>
        <UseContextB user={user}/>
      </UserContext.Provider>
      
      

    </div>
  )
}

export default UseContextA