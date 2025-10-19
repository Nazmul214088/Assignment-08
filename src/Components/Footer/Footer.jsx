import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-[#001931] px-20">
      <div className="flex justify-between items-start pt-9">
        <Link to={'/'} className="flex items-center gap-2">
          <img className="w-10" src={logo} alt="" />
          <h2 className="font-bold text-white ">HERO.IO</h2>
        </Link>
        <div>
          <h1 className=" font-medium text-xl text-white mb-4">Social Links</h1>
          <ul className="flex gap-4">
            <li className="w-6 h-6 text-center bg-white rounded-full">
              <a href="https://x.com/NazmulHoqu26155">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </li>
            <li className="w-6 h-6 text-center bg-white rounded-full">
              <a href="https://www.linkedin.com/in/nazmul-hoque-9931972a4/">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
            <li className="w-6 h-6 text-center bg-white rounded-full">
              <a href="https://www.facebook.com/profile.php?id=100009155794520">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        <p className="py-8 text-[#FAFAFA]">
          Copyright © 2025 - All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
