import React, {useState} from 'react'


const Mycomponent = () => {

  const [name, setName] = useState();
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);

 
  const updateName = () => {
    setName('Dayo')
  }

  const increaseAge = () => {
      setAge(age + 1)
  }

  const ToggleStatus = () => {
    setIsEmployed(!isEmployed)
  }



  return (
    <div>
      <p>Name:{name}</p>
      <button onClick={updateName}>
        Set Name
      </button>


      <p>Age:{age}</p>
      <button onClick={increaseAge}>
        Set Age
      </button>

      <p>Employement Status:{isEmployed ? "Yes" : "No"}</p>
      <button onClick={ToggleStatus}>
        Set Employment
      </button>
    </div>
  )
}

export default Mycomponent