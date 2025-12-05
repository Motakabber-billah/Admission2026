import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navLinks = <>
        <div className='flex flex-col md:flex-row  md:items-center md:justify-center gap-3 text-base'>
            <NavLink to={'/'} className={'bg-slate-200 border border-violet-500 px-4 py-1 rounded-md hover:bg-violet-400 text-black'}><li>হোম</li></NavLink>
            <NavLink to={'https://photobip.com/tools/resizer/teletalk/photo'} className={'bg-slate-200 border border-violet-500 px-4 py-1 rounded-md hover:bg-violet-400 text-black'}><li>300x300 ফটো রিসাইজার</li></NavLink>
            <NavLink to={'https://nobolok.com/gsa'} className={'bg-slate-200 border border-violet-500 px-4 py-1 rounded-md hover:bg-violet-400 text-black'}><li>বয়স ক্যালকুলেটর</li></NavLink>
            <NavLink to={'/contact'} className={'bg-slate-200 border border-violet-500 px-4 py-1 rounded-md hover:bg-violet-400 text-black'}><li>যোগাযোগ</li></NavLink>
        </div>
    </>
    return (
        <div>
            <div className="flex items-center justify-center bg-gray-100 mt-4">
                <div className="">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       {navLinks} 
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;