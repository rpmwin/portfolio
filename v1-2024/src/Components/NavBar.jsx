import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';
import '../index.css';

function NavBar() {
  const [onRoute, setOnRoute] = useState('Home');

  const [navbarSliderCSS, setNavbarSliderCSS] = useState('');

  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath === '/') {
      setNavbarSliderCSS('left-[15px]');
      setOnRoute('Home');
    } else if (currentPath === '/Projects') {
      setNavbarSliderCSS('left-[200px] translate-x-[-50%]');
      setOnRoute('Projects');
    } else if (currentPath === '/Contact') {
      setNavbarSliderCSS('left-[329px] translate-x-[-50%]');
      setOnRoute('Contact');
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (onRoute === 'Home') {
        setNavbarSliderCSS('left-[15px]');
      } else if (onRoute === 'Projects') {
        setNavbarSliderCSS('left-[200px] translate-x-[-50%]');
      } else if (onRoute === 'Contact') {
        setNavbarSliderCSS('left-[329px] translate-x-[-50%]');
      }
    }, 0);
  }, [onRoute]);

  return (
    <div className="navBar flex bg-slate-900  p-1  min-w-max w-[400px] rounded-md justify-around m-5 py-3 relative border border-slate-600 ">
      <NavLink
        to={'/'}
        className={({ isActive }) =>
          `${
            isActive
              ? ' p-3 text-xl rounded-lg transition-all  duration-500 PoppinsSemiBoldItalic text-orange-400 '
              : ' p-3 text-xl rounded-lg  duration-300 PoppinsThin'
          }
          w-[100px] text-center z-10
        `
        }
        onClick={() => setOnRoute('Home')}
      >
        {' '}
        Home
      </NavLink>
      <NavLink
        to={'/Projects'}
        className={({ isActive }) =>
          `${
            isActive
              ? ' p-3 text-xl rounded-lg  transition-all  duration-500 PoppinsSemiBoldItalic text-orange-400'
              : ' p-3 text-xl rounded-lg  duration-500 PoppinsThin'
          }
        w-[100px] text-center z-10`
        }
        onClick={() => setOnRoute('Projects')}
      >
        {' '}
        Projects
      </NavLink>
      <NavLink
        to={'/Contact'}
        className={({ isActive }) =>
          `${
            isActive
              ? ' p-3 text-xl rounded-lg  transition-all  duration-500 PoppinsSemiBoldItalic text-orange-400'
              : ' p-3 text-xl rounded-lg  duration-500  PoppinsThin'
          }
        w-[100px] text-center z-10`
        }
        onClick={() => setOnRoute('Contact')}
      >
        {' '}
        Contact
      </NavLink>
      <div
        className={`navbarSlider absolute w-[110px] h-[90%] bg-black border-slate-900 bottom-1  duration-1000 rounded-3xl ${navbarSliderCSS}`}
      ></div>
    </div>
  );
}

export default NavBar;
