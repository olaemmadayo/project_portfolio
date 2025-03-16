import React, {useContext} from 'react'
import { UserContext } from './UseContextA.jsx'
import '../styles/useContext.css'
import UseContextC from './UseContextC'

const UseContextB = () => {
  const user = useContext(UserContext);
  return (
    <div className='box'>
      <h1 >UseContextB</h1>
      <h2>{`Still Again ${user}`}</h2>
      <UseContextC/>
    </div>
    
  )
}

export default UseContextB