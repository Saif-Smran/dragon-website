import React from 'react';
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center my-10 gap-2'>
            <img src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p className='font-medium text-xl'><span className='font-semibold'>Sunday</span>, November 27, 2025</p>
        </div>
    );
};

export default Header;