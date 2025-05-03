import React, { use } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import profile from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {

    const { user, Logout } = use(AuthContext)
    const location = useLocation()

    const handleLogout = () => {
        Logout()
            .then(() => {
                alert('Logout successful')
                console.log('Logout successful')
            })
            .catch((error) => {
                alert('Logout error')
                console.error('Logout error:', error)
            })
    }

    return (
        <div className='flex justify-between items-center '>
            <div className=''>{user && user?.email}</div>
            <nav className="nav text-accent text-lg space-x-5">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </nav>
            <div className="btn-login gap-5 flex items-center">
                <img className='w-11 rounded-full' src={user?.photoURL || profile} alt="" />
                {
                    user ? <button onClick={handleLogout} className='btn btn-primary px-10'>Log Out</button> :
                        <Link state={location.pathname} to='/auth/login' className='btn btn-primary px-10'>Log In</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;