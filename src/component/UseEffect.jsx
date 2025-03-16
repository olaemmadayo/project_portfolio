//useEffect((function), [])

//1. useEffect(() => {},)             //Run after every re-render
//2. useEffect(() => {}, [])          //Runs only on mount
//3. useEffect(() => {}, [value])      Runs on mount + when value changes 
import React, { useState, useEffect} from 'react'


const UseEffect = () => {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState('green');

    useEffect(() => {
      document.title = `Count:${count} ${color}`
    }, [count, color])

    function addCount(){
      setCount(c => c + 1)
    }
    function subtractCount(){
      setCount(c => c - 1)
    }
    function addColor(){
      setColor(c => c === "green" ? "red" : "green")
    }
  return (
    <div>
      <p style={{color:color}}>count: {count} </p>
      <button style={{color: 'black'}} onClick={addCount}>Add Count</button>
      <button style={{color: 'black'}} onClick={subtractCount}>Add Count</button>
      <button style={{color: 'black'}} onClick={addColor}>Add Color</button>

    </div>
  )
}

export default UseEffect