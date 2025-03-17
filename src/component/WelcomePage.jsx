import React from 'react'
import "../styles/welcomePage.css"
import { FaCss3, FaEnvelope, FaHtml5, FaJsSquare, FaPhone, FaReact } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const WelcomePage = () => {

  
  

  return (
    <div className="welcome-container">
      <h2 className='welcome--text'>
        Explore my portfolio to discover how I leverage my skills to build responsive, scalable, and maintainable web applications. Let's collaborate to bring your vision to life!
      </h2>
      <div className="hero-section">
        
        <h1>Building Seamless User Experiences with React.</h1>
        <p>Passionate about creating efficient and scalable front-end solutions.</p>
        <div className="button-group">
          <button className="cta-button" ><Link to="/todo-list" className='view-project'>View My Projects</Link></button>
          <button className="cta-button">Download My Resume</button>
          <a href="your_linkedin_profile_url" target="_blank" rel="noopener noreferrer">
            <button className="cta-button">Connect on LinkedIn</button>
          </a>
        </div>
        <div className="tech-icons">
          <i className="fab fa-react"><FaReact/></i>
          <i className="fab fa-html5"><FaHtml5/></i>
          <i className="fab fa-css3-alt"><FaCss3/></i>
          <i className="fab fa-js-square"><FaJsSquare/></i>
        </div>
      </div >
      <div className="footer-rap">
        <div className="email">
          <FaEnvelope/>
          <p>olatoye.temidayo@yahoo.com</p>
        </div>
        <div className="contact">
        <FaPhone/>
        <p>+251973218245</p>
        </div>
      </div>
    </div>
  )
}

export default WelcomePage