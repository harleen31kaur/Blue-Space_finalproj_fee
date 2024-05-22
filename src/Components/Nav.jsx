import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Nav = () => {
    return (
        <nav>
            <Link to="/">
                <img src="\newlogo.png" alt="Logo" />
            </Link>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/destination">Discover Now</Link></li>
                <li><Link to="/experiences">Experiences</Link></li>
                <li><Link to="/book-now">Review</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/about">About Us</Link></li>
                
              
               

            </ul>
        </nav>
    );
}

export default Nav;

