// useEffect(function, [dependecies])
import React, {useState, useEffect} from 'react'
import "../styles/windowResize.css"

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
    <div className='window-resize-rap'>
      <p>Window Width: {width}px</p>
      <p>Window height: {height}px</p>
    </div>
  )
}

export default WindowResize