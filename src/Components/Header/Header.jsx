import React from "react";
import { Link, NavLink } from "react-router";
import logo from '../../assets/logo.png'
import './header.css'

const Header = () => {
  return (
    <div className="navbar px-8 bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <NavLink className={'p-2 text-[#000000e6] font-medium'} to={'/'}>Home</NavLink>
            <NavLink className={'p-2 text-[#000000e6] font-medium'}  to={'/apps'}>Apps</NavLink>
            <NavLink className={'p-2 text-[#000000e6] font-medium'}  to={'/installation'}>Installation</NavLink>
          </ul>
        </div>
        <Link to={'/'} className="flex items-center gap-2">
          <img className="w-10" src={logo} alt="" />
          <h2 className="font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">HERO.IO</h2>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 py-7">
          <NavLink className={ 'mx-6 py-1 px-1 text-[#000000e6] font-medium'} to={'/'}><i className="fa-solid fa-house-chimney"></i> Home</NavLink>
          <NavLink className={'mx-6 py-1 px-1 text-[#000000e6] font-medium'}  to={'/apps'}><i className="fa-brands fa-app-store-ios"></i> Apps</NavLink>
          <NavLink className={'mx-6 py-1 px-1 text-[#000000e6] font-medium'}  to={'/installation'}><i className="fa-solid fa-download"></i> Installation</NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        <a onClick={() => window.location.href = 'https://github.com/Nazmul214088'} className="btn py-3 px-4 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold"><i className="fa-brands fa-github"></i> Contribute</a>
      </div>
    </div>
  );
};

export default Header;
