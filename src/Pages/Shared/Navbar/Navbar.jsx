import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const Link = <>
        <NavLink to='/'  className={({ isActive }) => isActive ? 'font-bold text-rose-700' : 'text-[#ECF0F1]'}>Home</NavLink>
        <NavLink to='/all-products'  className={({ isActive }) => isActive ? 'font-bold text-rose-700' : 'text-[#ECF0F1]'}>All Products</NavLink>
    </>

    return (
        <div className='bg-gradient-to-r from-[#000214] via-[#272730] to-[#00020b] text-white sticky top-0 z-50 backdrop-blur opacity-85 md:py-1'>

            <div  className="navbar max-w-screen-xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu bg-gradient-to-r from-[#070A16] via-[#070A16] to-[#070A16] menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {Link}
                        </ul>
                    </div>
                    {/* Fixed NavLink usage */}
                    <NavLink to="/" className=" text-blue-700 font-bold text-xs md:text-xl">
                        CloudCore Fashion
                    </NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-5">
                        {Link}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
