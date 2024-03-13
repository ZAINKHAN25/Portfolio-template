import React from 'react';
import "./app.css";

// import logo from "../../1.png"

function Navbar() {
  return (
    <nav>
      <nav className="navbar navbarDiv p-2">
        <div className="container containerOfNavbar p-0 d-flex align-items-center">
          <div>
            <img src="../../1.png" style={{ borderRadius: "50%", cursor: "pointer"}} alt="Bootstrap" width="60" height="60" />
          </div>
          <ul className='ulOfNavbar'>
            <li>HOME</li>
            <li>SERVICE</li>
            <li>PORTFOLIO</li>
            <li>SKILL</li>
            <li>TESTIMONIAL</li>
            <li>BLOG</li>
            <li>CONTACT</li>
          </ul>
        </div>
      </nav>
    </nav>
  )
}

export default Navbar