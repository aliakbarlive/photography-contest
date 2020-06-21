import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav =()=>{
    return(
        <nav>
        <div className="nav-wrapper" style={{background:'purple'}}>
          <a href="# " className="brand-logo">My PicGallery </a>
          <ul id="nav-mobile" className="right ">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="about">About</NavLink></li>
            <li><NavLink to="log-in">LogIn</NavLink></li>
          </ul>
        </div>
      </nav>
    )
}
export default Nav