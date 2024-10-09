
import  { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/Subtract.svg'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <nav className="bg-white ">
      <div className="container mx-auto px-10 py-4 flex justify-between items-center">
        
        {/* Logo  */}
        <div className="flex items-center space-x-2">
          <div className="   flex items-center justify-center">
           <img src={logo} alt="logo" className='w-[67px] h-[67px]' /> 
          </div>
          <h1 className="text-[#1E1E1E] font-montserrat text-[42px] font-bold leading-normal">M<span className='text-[#545454] font-montserrat text-[38px] font-normal leading-normal'>umair</span> </h1>
        </div>
        
        {/* Centered links */}
        <div className="hidden md:flex flex-grow justify-center space-x-6 text-black font-poppins text-[21px] font-normal leading-normal tracking-[0.63px]">
          <NavLink to="/" className="text-gray-700 hover:text-orange-500">Home</NavLink>
          <NavLink to="/" className="text-gray-700 hover:text-orange-500">About Me</NavLink>
          <NavLink to="/" className="text-gray-700 hover:text-orange-500">Services</NavLink>
          <NavLink to="/" className="text-gray-700 hover:text-orange-500">Projects</NavLink>
          <NavLink to="/" className="text-gray-700 hover:text-orange-500">Testimonials</NavLink>
          <NavLink to="/" className="text-gray-700 hover:text-orange-500">Contact</NavLink>
        </div>

        {/* Download CV button  */}
        <div className="hidden md:flex">
          <Link to="#" className="bg-[#FD6F00] text-white px-4 py-2 rounded hover:bg-orange-600  font-poppins text-[21px] font-normal leading-normal tracking-[0.63px]">Download CV</Link>
        </div>

        {/*  mobile */}
        <div className="md:hidden flex items-center">
          <button className="text-gray-700 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-4">
          <NavLink to="#" className="text-gray-700 hover:text-orange-500">Home</NavLink>
          <NavLink to="#" className="text-gray-700 hover:text-orange-500">About Me</NavLink>
          <NavLink to="#" className="text-gray-700 hover:text-orange-500">Services</NavLink>
          <NavLink to="#" className="text-gray-700 hover:text-orange-500">Projects</NavLink>
          <NavLink to="#" className="text-gray-700 hover:text-orange-500">Testimonials</NavLink>
          <NavLink to="#" className="text-gray-700 hover:text-orange-500">Contact</NavLink>
          <NavLink to="#" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">Download CV</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
