import React from 'react'
import "../styles/cards.css"

const Cards = ({image, title, content, name}) => {
  return (
    <div className='cards--body'>
        <img src={image} alt="" />
      
        <h2>{title}</h2>
        <p>{content}</p>
        <p>created by: {name}</p>
      
    </div>
  )
}

export default Cards
