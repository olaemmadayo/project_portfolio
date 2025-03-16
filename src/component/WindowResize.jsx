// useEffect(function, [dependecies])
import React, {useState, useEffect} from 'react'

const WindowResize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] =useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("EVENT LISTENER REMOVED")
    }
  },[])

  useEffect(() => {
    document.title = `Size: ${width} x ${height}`
  }, [width, height])

  function handleResize(){
    setWidth(window.innerWidth);
    setHeight(window.innerHeight)
  }

  return (
    <div>
      <p>Window WIdth: {width}px</p>
      <p>Window height: {height}px</p>
    </div>
  )
}

export default WindowResize