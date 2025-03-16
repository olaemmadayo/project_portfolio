import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/projectNav.css"
import { FaCalculator, FaClock, FaPuzzlePiece, FaSign, FaWeight } from 'react-icons/fa';
import techLogo from "../assets/images/olaemmadayo tech.png"



const ProjectNav = () => {
  return (
    <div className='project--nav'>
      
      <div className="nav-heading">
        <img className="techlogo" src={techLogo} alt="" />
        <h3 className='heading-font'>Projects</h3>
        
      </div>

      <div className="project-links">
        <Link to="/todo-list" className='item'><FaCalculator/>
        Todo List</Link>
        <Link to="/color-picker" className='item'><FaPuzzlePiece/>Color Picker</Link>
        <Link to="/counter" className='item'> <FaCalculator/>Counter   </Link>
        <Link to="/digital-time" className='item'><FaClock/>Digital Clock</Link>
        <Link to="/window-resize" className='item'><FaWeight/>Window Resize</Link>
        <Link to="/stop-watch" className='item'><FaClock/>Stopwatch</Link>
        <Link to="/converter" className='item'><FaClock/>Converter</Link>


      </div>
      
    </div>
  )
}

export default ProjectNav