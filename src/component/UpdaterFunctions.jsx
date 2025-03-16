import React, {useState} from 'react'

const UpdaterFunctions = () => {
  const [count, setCount] = useState(0);
  
      const increment = () =>{
        setCount(c => c + 1)
        setCount(c => c + 1)
        setCount(c => c + 1)
      };
      const decrement = () => {
        setCount(c => c - 1)
        setCount(c => c - 1)
        setCount(c => c - 1)
      } ;
      const reset = () => {
          setCount(0)
      };
  
  return (
    <div>
      <p>count:{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default UpdaterFunctions