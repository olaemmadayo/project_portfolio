import React, {useState} from 'react'
import "../styles/onChangeElement.css"

function OnchangeElement(){
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(0);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");

  function handleNameChange(event){
    setName(event.target.value);
  }
  function handleQuantityChange(event){
    setQuantity(event.target.value);
  }
  function handleCommentChange(event){
    setComment(event.target.value);
  }
  function handlePaymentChange(event){
    setPayment(event.target.value);
  }
  function handleShippingChange(event){
    setShipping(event.target.value);
  }

  return (
    <div className='form--page'>

      <h1>FORM</h1>
      
      <input className='form--input' value={name} onChange={handleNameChange} />
      <p>Name: {name} </p>

      <input className='form--input' value={quantity} onChange={handleQuantityChange} type="number"/>
      <p>Name: {quantity} </p>

      <textarea className='form--input' value={comment} onChange={handleCommentChange} placeholder='Delivery instruction' />
      <p>Delivery Instructions: {comment} </p>

      <select className='form-select' value={payment} onChange={handlePaymentChange}>
        <option value="">Select payment option</option>
        <option value="Visa">Visa</option>
        <option value="Master">Master</option>
        <option value="Gift Card">Gift Card</option>
        <option value="Verve">Verve</option>
      </select>
      <p>Payment: {payment}</p>

      <label className="form--label--input" >
          <input  type="radio" value="Pick Up" 
                  checked={shipping === "Pick Up"}
                  onChange={handleShippingChange}/>
          Pick Up
      </label> <br />
      <label className="form--label--input">
          <input className="form--label--input" type="radio" value="Delivery" 
                  checked={shipping === "Delivery"}
                  onChange={handleShippingChange}/>
          Delivery
      </label>
      <p>Shipping: {shipping}</p>
    </div>


  )
}

export default OnchangeElement