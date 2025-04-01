import React from 'react'
import '../Styles/NavBar.css'
import reactLogo from '../assets/react.svg'
import Dropdown from './Dropdown/Dropdown.jsx'
function NavigationBar() {

  return (
    <div>
        <nav className="navbar">
            <ul className="nav-Sections">
                <li><a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
                </a></li>
                <li className="linked"><a href= "#Projects"><Dropdown buttonText="ProjeDropdown button"/></a></li>
                <li className="linked"><a href= "#About Me">About Me</a></li>
                <li className="linked"><a href= "#All tools used">All tools used</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default NavigationBar