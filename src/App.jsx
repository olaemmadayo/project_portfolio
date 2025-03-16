import React from 'react'
import "./App.css"
import ProjectNav from './component/ProjectNav'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Counter from './component/Counter';
import ColorPicker from './component/ColorPicker';
import TodoList from './component/TodoList';
import DigitalClock from './component/DigitalClock';
import WindowResize from './component/WindowResize';
import StopWatch from './component/Stopwatch';
import Converter from './component/Converter';

const App = () => {
  return (
    
      <div className='dashboard'>
        <Router>
         <div className="nav--c">
          <ProjectNav/>
        </div>
          
          <div className='project--c'>
           
            <Routes>
           
              <Route path="/todo-list" element={<TodoList/>} />
              <Route path="color-picker" element={<ColorPicker/>} />
              <Route path="counter" element={<Counter/>} />
              <Route path="digital-time" element={<DigitalClock/>} />
              <Route path="window-resize" element={<WindowResize/>} />
              <Route path="stop-watch" element={<StopWatch/>} />
              <Route path="converter" element={<Converter/>} />

            </Routes>
          </div>

        </Router>
      </div>
    
  )
}

export default App