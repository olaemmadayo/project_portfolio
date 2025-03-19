import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/projectNav.css"
import { FaCalculator, FaClock, FaPen, FaPuzzlePiece, FaWeight } from 'react-icons/fa';
import techLogo from "../assets/images/olaemmadayo tech.png";
import { FaScaleBalanced } from 'react-icons/fa6';



const ProjectNav = () => {
  return (
    <div className='project--nav'>
      
      <div className="nav-heading">
        <img className="techlogo" src={techLogo} alt="" />
        <h3 className='heading-font'>< Link to="/" className='link'> Projects</Link></h3>
        
      </div>

      <div className="project-links">

        <Link to="/todo-list" className='item'><  FaCalculator className="fa-icon"/>
          Todo List
        </Link>

        <Link to="/color-picker" className='item'><FaPuzzlePiece className="fa-icon"/>
          Color Picker
        </Link>

        <Link to="/counter" className='item'> <FaCalculator className="fa-icon"/>
          Counter   
        </Link>

        <Link to="/digital-time" className='item'>
        <FaClock className="fa-icon"/>
          Digital Clock
        </Link>
        <Link to="/window-resize" className='item'>
        <FaWeight className="fa-icon"/>
          Window Resize
        </Link>
        <Link to="/stop-watch" className='item'>
        <FaClock className="fa-icon"/>
          Stopwatch
        </Link>
        <Link to="/converter" className='item'>
        <FaScaleBalanced className="fa-icon"/>
          Converter
        </Link>
        <Link to="/onchange" className='item'>
        <FaPen className="fa-icon"/>
          Form
        </Link>


      </div>
      
    </div>
  )
}

export default ProjectNav