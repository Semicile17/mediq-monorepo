import { useState } from 'react';
import logo from '../assets/images/medic.svg';
import profile from '../assets/images/people.png';
import close from '../assets/images/close.svg';
import menu from '../assets/images/menu.svg';
import SearchBox from './searchBox';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
    <nav className="w-full bg-[#F1F9FF] h-16 flex p-4 justify-between fixed">
      <div className="mediq-logo h-full flex items-center p-2 space-x-4">
        <img src={logo} alt="mediQ" className="h-8" />
      </div>

      <SearchBox/>

      <div className={`${isMenuOpen ? 'hidden' : ''} hidden md:flex pr-32 `}>
        <ul className="flex space-x-16">
          <li className="text-lg hover:bg-[#095D7E] px-3 hover:text-white rounded-sm">Home</li>
          <li className="text-lg hover:bg-[#095D7E] px-3 hover:text-white rounded-sm">Blogs</li>
          <li className="text-lg hover:bg-[#095D7E] px-3 hover:text-white rounded-sm">Services</li>
          <li className="text-lg hover:bg-[#095D7E] px-3 hover:text-white rounded-sm">Profile</li>
        </ul>
      </div>

      <div className="md:hidden file:menu h-full flex items-center p-2 space-x-4">
        <img
          src={!isMenuOpen ? menu : close}
          alt="menu-logo "
          className={`h-3 z-10 ${isMenuOpen ? 'text-white' : 'text-black'}`}
          onClick={toggleMenu}
        />
      </div>
    
  
      <img src={profile} alt="profile" className='h-8 hidden md:block rounded-full border border-black'/>
    
      <div
        className={`fixed top-0 right-0 h-full w-[300px] bg-[#095D7E] shadow-lg transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <ul className="flex flex-col space-y-8 p-8 mt-6 items-center">
          <li className="w-full flex">
            <img
              src={profile}
              alt="profile"
              className="h-16 border rounded-full p-2"
            />
            <div className="ml-4 flex items-center text-lg text-white">John Doe</div>

            
          </li>
          <li
            className="text-lg text-white border w-full text-center p-2 shadow-slate-800 shadow- shadow-md hover:bg-[#14967F] hover:scale-105 duration-500 rounded-md"
            onClick={toggleMenu}
          >
            Home
          </li>
          <li
            className="text-lg text-white border w-full text-center p-2 shadow-slate-800 shadow- shadow-md hover:bg-[#14967F] hover:scale-105 duration-500 rounded-md "
            onClick={toggleMenu}
          >
            Blogs
          </li>
          <li
            className="text-lg text-white border w-full text-center p-2 shadow-slate-800 shadow- shadow-md hover:bg-[#14967F] hover:scale-105 duration-500 rounded-md"
            onClick={toggleMenu}
          >
            Services
          </li>
          <li
            className="text-lg text-white border w-full text-center p-2 shadow-slate-800 shadow- shadow-md hover:bg-[#14967F] hover:scale-105 duration-500 rounded-md"
            onClick={toggleMenu}
          >
            Profile
          </li>
        </ul>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
