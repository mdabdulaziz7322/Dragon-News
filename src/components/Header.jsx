
import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center h-20 mt-15 gap-3'>
           <img src={logo} alt="" />
           <p className='text-2xl text-accent'>Journalism Without Fear or Favour</p>
           <p className='text-2xl font-semibold text-accent'>{format( new Date(), "EEEE , MMMM MM, yyyy",)}</p>
        </div>
    );
};

export default Header;