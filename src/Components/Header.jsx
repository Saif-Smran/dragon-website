import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center my-10 gap-2'>
            <img src={logo} alt="" />
            <p className='text-accent text-lg'>Journalism Without Fear or Favour</p>
            <p className='font-medium text-xl text-accent'><span className='font-semibold'>{format(new Date() , 'EEEE')}</span>, {format(new Date(), 'MMMM dd, yyyy')}</p>
        </div>
    );
};

export default Header;