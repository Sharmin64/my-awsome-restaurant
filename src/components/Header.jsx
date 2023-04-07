import React, { useState } from 'react';
import { Bars3Icon, HomeModernIcon, XMarkIcon} from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen ,setIsMenuOpen] = useState(false)
  return (
    <div  className='flex items-center justify-around bg-slate-300 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
      <div className='relative flex items-center justify-between'>
      <Link to="/" className='inline-flex items-center'>
        <HomeModernIcon
          className='w-6 h-6 text-indigo-600'></HomeModernIcon>
        <span className='ml-2 text-xl font-mono font-bold tracking-wide text-indigo-500'>Restaurant</span>
        </Link>
        </div>
      <ul className='items-center hidden space-x-8 lg:flex'>
          <li>
            <NavLink
              to='/' title='Home'
              className={({ isActive }) => (isActive ? 'text-purple-700 underline' : 'default  hover:text-lime-600')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
            to='/meals' title='Meals'
              className={({ isActive }) => (isActive ? 'text-purple-700 underline' : 'default  hover:text-lime-600')}
            >
              Meals
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about' title='About Restaurant'
              className={({ isActive }) => (isActive ? 'text-purple-700 underline' : 'default hover:text-lime-600')}
            >
              About Restaurant
          </NavLink>
        
          </li>
      </ul>
      {/*for mobile device */}
      <div className='lg:hidden'>
        <button aria-label='open menu' title='open menu' onClick={()=>setIsMenuOpen(true)}>
              <Bars3Icon className='w-6 text-orange-500' />
        </button>
        {
          isMenuOpen && (
            <div className='absolute top-0 left-0 w-full z-10'>
              <div className='p-5 bg-slate-300 border rounded shadow-sm'>
                <div className='flex justify-between items-center mb-4'>
                  <div>
                  <Link to="/" className='inline-flex items-center'>
                      <HomeModernIcon
                     className='w-6 h-6 text-indigo-600'></HomeModernIcon>
                      <span className='ml-2 text-xl font-mono font-bold text-indigo-500 tracking-wide'>Restaurant</span>
                    </Link>
                  </div>
                  <div>
                    <button  aria-label='close menu' title='close menu' onClick={()=>{setIsMenuOpen(false)}}>
                      <XMarkIcon className='w-6 text-slate-500'/>
                    </button>
                  </div>
                </div>
              </div>         
          </div>
          )
        }
      </div>
       
    </div>

    
  );
};

export default Header;