import React from 'react'


function Navbar() {
  return (
<div className="header">
    <nav id='navbar' >
        <div className='logo'><h1>CogniMuse</h1></div>
        <div className='nav-items'>
            <a href="/">Home </a>
            <a href="/about">About </a>
            <button className='nav-btn'>Get Started</button>
        </div>
    </nav>
    </div>
  )
}

export default Navbar
