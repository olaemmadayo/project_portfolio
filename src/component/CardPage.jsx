import React from 'react'
import Cards from './Cards';
import myPhoto from "../assets/images/photo-me.jpg";
import "../styles/cardPage.css";

const CardPage = () => {
  
  return (
    <div className='card--page'>
      <Cards
      image={myPhoto}
      title="Front-End Engineer"
      content="HTML, CSS, JAVA, REACT"
      name="Olatoye Emmanuel"
      />
      <Cards
      image={myPhoto}
      title="Front-End Engineer"
      content="HTML, CSS, JAVA, REACT"
      name="Olatoye Emmanuel"
      />
    </div>
  )
}

export default CardPage
