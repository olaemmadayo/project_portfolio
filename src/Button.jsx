import React from 'react'

const Button = () => {
  let count = 0;
  const handleClick = (name) => {
  if (count < 3){
      count++;
      console.log(`${name} you clicked me ${count} time/s`);
    }
  else {
    
    console.log(`${name} stop clicking me`);
  }
  };
;

  return (
    <div>
      <button onClick={() => handleClick("Dayo")}>click me </button>
    </div>
  )
}

export default Button