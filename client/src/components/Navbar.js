import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <Link to='/'>Home   </Link>
            <Link to='/About'> About Us  </Link>
            <Link to='/Gallery'> Gallery    </Link>
            <Link to='/Reviews'> Reviews    </Link>
            <Link to='/Appointments'> Appointments   </Link>
            <hr></hr>
        </nav>
    )
};

export default Navbar;