import React from 'react';
import  { NavLink } from 'react-router-dom';
import './styles/Navbar.css'
const Navbar = () => {

    return(
        <nav>
            <div className="Nav">
                <div ><span className="Nav-title">Microblog </span>Get into the blog</div>
                <div>
                    <NavLink className="Nav-link" to='/'>Blog</NavLink>
                    <NavLink className="Nav-Link" to='/new'>Add a new post</NavLink>
                </div>
            </div>
        </nav>
  
    )
}

export default Navbar;