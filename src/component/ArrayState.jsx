import React, {useState} from 'react'

const ArrayState = () => {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"])

  function handleAddFood(){
    const newFood = document.getElementById("food-Input").value;
    document.getElementById("food-Input").value = "";

    setFoods(f => [...f, newFood]);
  }
  function handleRemoveFood(index){
    setFoods(foods.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h1>List of Food</h1>
      <ul>
        {foods.map((food, index) =>
        <li key={index} onClick={() => handleRemoveFood(index)} >
          {food}
        </li> )}
      </ul>

      <input type="text" id="food-Input" placeholder="Enter food name" />
      <button onClick={handleAddFood}>Add Food</button>
    </div>
  )
}

export default ArrayState