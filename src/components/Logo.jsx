import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router';

const Logo = () => {
    return (
        <Link to={'/'}>
            <div className='flex items-end'>
                <img className='h-8 lg:h-10' src={logo} alt="" />
                <p className='text-xs md:text-sm lg:text-xl text-black -ml-3 font-semibold hidden md:block lg:block'>Talentsync <span className='text-secondary'>Platform</span></p>
            </div>
        </Link>
    );
};

export default Logo;