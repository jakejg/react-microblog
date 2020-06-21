import React from 'react';
import  { NavLink } from 'react-router-dom';

const Navbar = () => {

    return(
        <nav>
            <div className="Nav">
                <div>Microblog <span>Get into the blog</span></div>
                <NavLink to='/'>Blog</NavLink>
                <NavLink to='/new'>Add a new post</NavLink>
            </div>
        </nav>
  
    )
}

export default Navbar;