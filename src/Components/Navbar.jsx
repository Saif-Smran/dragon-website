import React from 'react';
import { Link, NavLink } from 'react-router';
import profile from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center '>
            <div className=''></div>
            <nav className="nav text-accent text-lg space-x-5">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </nav>
            <div className="btn-login gap-5 flex items-center">
                <img src={profile} alt="" />
            <Link to='/auth/login' className="btn btn-primary">Log in</Link>
            </div>
        </div>
    );
};

export default Navbar;