import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <nav className='flex flex-col gap-6 w-full text-center py-8'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/meals'>Meal</NavLink>
            <NavLink to='about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
        </nav>
    );
};

export default Nav;