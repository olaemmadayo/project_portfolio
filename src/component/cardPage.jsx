import React from 'react'
import Cards from '../component/Cards';
import myPhoto from "../assets/images/photo-me.jpg";
import "../styles/cardPage.css";

const cardPage = () => {
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

export default cardPage