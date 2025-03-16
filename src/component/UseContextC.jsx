import React, {useContext} from 'react'
import { UserContext } from './UseContextA.jsx'
  import '../styles/useContext.css'
import UseContextD from './UseContextD'
  
  const UseContextC = () => {
    const user = useContext(UserContext)
    return (
      <div className='box'>
        <h1 >UseContextC</h1>
        <h2>{`Hello Again ${user}`}</h2>
        <UseContextD/>
      </div>
    )
  }
  
  export default UseContextC