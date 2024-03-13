import React from 'react';
import "./app.css";

function Navbar() {
  return (
    <nav className="navbar navbarDiv p-2 ">
      <div className="container containerOfNavbar p-0 d-flex align-items-center">
        <div>
          <img src="../../1.png" style={{ borderRadius: "50%", cursor: "pointer" }} alt="Bootstrap" width="60" height="60" />
        </div>
        <ul className='ulOfNavbar'>
          <li data-to-scrollspy-id="first">HOME</li>
          <li data-to-scrollspy-id="second">SERVICE</li>
          <li>PORTFOLIO</li>
          <li>SKILL</li>
          <li>TESTIMONIAL</li>
          <li>BLOG</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar