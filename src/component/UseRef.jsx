//useState() = Re-renders the component 
//              when the state value changes.
//useRef() = "use reference" Does not 
//            cause re-renders when its 
//            value changes. when you want a component to 
//            "remember" some information, but you don't 
//            what that information to trigger new renders.
//  1. Accessing/Interacting with DOM elements
//  2. Handling Focus, Animation, and transitions
//  3. Managing timer and intervals  

import React, {useState, useEffect, useRef} from 'react'

const UseRef = () => {

const inputRef = useRef(null);

useEffect(() => {

});

function handleClick(){
  inputRef.current.focus();
  inputRef.current.style.backgroundColor = "yellow";
}

  return (
    <div>
      <button onClick={handleClick}>
        Click me!
      </button> 
      <input  ref={inputRef} />
    </div>
  )
}

export default UseRef