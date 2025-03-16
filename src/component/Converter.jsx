import React, { useState } from 'react'


const Converter = () => {

  // const [celcius, setCelsius] = usestate("false")
  // const [Fahrenhight, setFarehhight] = useState()
  const [temp, setTemp] = useState(0)
  const [unit, setUnit] = useState("")

    function handleTempCchange(event){
      
      setTemp(event.target.value);


    }

    function handleUnitCchange(event){
      
      setUnit(event.target.value);

     

    }
  
    const newTemp = (unit == "celsius") ? (temp - 32) * 5 / 9 : (temp * 5 / 9) + 32;
    
    

  return (
    <div className='converter'>
      <h1>Converter</h1>
      <div className="temp--input">
        <input placeholder='Enter temperature value ' type="number" value={temp} onChange={handleTempCchange}/>
        <p>Temperature: {temp}</p>
        <input placeholder='Enter Celsius or Farenheight (C or F) ' type="text" value={unit} onChange={handleUnitCchange}/>

        <p>Unit Value: {unit}</p>

      </div>
      <p>{newTemp} </p>
      <div>
        {/* <button onClick={handleCelsiuschange}>Celsius</button> */}
        <h3>{}</h3>
        <button >Fahrenhight</button> 
      </div>


    </div>
  )
}

export default Converter