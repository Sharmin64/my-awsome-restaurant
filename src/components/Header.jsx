import React from 'react';
import { HomeModernIcon} from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div  className='flex items-center justify-around bg-slate-400 mx-auto'>
      <Link to="/" className='inline-flex items-center'>
        <HomeModernIcon
          className='w-6 h-6 text-indigo-600'></HomeModernIcon>
        <span className='ml-2 text-xl font-mono font-bold tracking-wide text-indigo-500'>Restaurant</span>
      </Link>
      <ul className='items-center hidden space-x-8 lg:flex'>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/meals'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Meals
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              About Restaurant
          </NavLink>
          
          </li>
        </ul>
    </div>
    
  );
};

export default Header;