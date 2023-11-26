// Navbar.js

import React from 'react';
import '../Components/Navbar.css'; // Import the CSS file for stypng
import logo from '../assets/logoplaynino.png'
import profile from '../assets/profile.png'
import cart from '../assets/cart.png'
import design from '../assets/Path 1342/Path 1342.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div ><img className="logoplay"src={logo}></img></div>
      <p className="nav-links">
        <a href="#home" className="sections" style={{color:'black'}}>Section 1</a>
        <a href="#services" className="sections" style={{color:'black'}}>Section 2</a>
        <a href="#about" className="sections" style={{color:'black'}}>Section 3</a>
        <a href="#contact" className="sections"><button style={{backgroundColor:'red', borderRadius:'5px', border:'none', color:'white'}}>Shop</button></a>
        <a href="#services" className="sections" style={{color:'black'}}>Blog</a>
        <a href="#contact" className="auth" >Sign Up</a>
        <a href="#services" className="auth"><button style={{backgroundColor:'blue', borderRadius:'5px', border:'none', color:'white'}}>Log In</button></a>
      </p>
      <div ><img className="profile"src={profile}></img></div>
      <div ><img className="cart" src={cart}></img></div>
      <div className="pic"><img src={design} /></div>
    </nav>
  );
};

export default Navbar;
