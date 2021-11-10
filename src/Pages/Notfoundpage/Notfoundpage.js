import React from 'react';
import { NavLink } from 'react-router-dom';
import './Notfound.css'
const Notfoundpage = () => {
    return (
        <div className="notFoundContainer"> 
            <div><h1 className="headtext">404 Page Not Found</h1></div>
            <NavLink to='/'><button className="btn">Home</button></NavLink>
        </div>
    );
};

export default Notfoundpage;