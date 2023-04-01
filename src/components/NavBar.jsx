import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeProvider';
import { brandA, brandB } from '../utility/constant';
import '../styles/components/navbar.scss';

function NavBar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <div className="navbar">
        <div
          className={`link ${theme === brandA && 'active'}`}
          onClick={() => toggleTheme('brandA')}
        >
          Brand A
        </div>
        <div
          className={`link ${theme === brandB && 'active'}`}
          onClick={() => toggleTheme('brandB')}
        >
          Brand B
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default NavBar;
