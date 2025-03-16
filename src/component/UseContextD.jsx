import React, {useContext} from 'react'
import { UserContext } from './UseContextA.jsx'
import '../styles/useContext.css'



const UseContextD = () => {
  
  const user = useContext(UserContext);
  return (
    <div className='box'>
      <h1>ComponentD</h1>
      <h2>{`Bye ${user}`}</h2>
    </div>
  )
}

export default UseContextD