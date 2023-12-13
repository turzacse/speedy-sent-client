import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const Navber = () => {
    const {user,logOut} = useContext(AuthContext);
    const handleLogout = () => {
        logOut();
    }
    const links = <>
        <li className='font-semibold'><NavLink to='/'>Home</NavLink></li>
        <li className='font-semibold'><NavLink to='/dashboard'>Deshboard</NavLink></li>
        <li className='font-semibold'><NavLink to='/private'>Galary</NavLink></li>
        <li className='font-semibold'><NavLink to='/about'>About</NavLink></li>
        
    </>
    return (
        <div>
            <div className="shadow-2xl">
                <div className="navbar bg-[#05b37e] px-10 text-white">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {links}
                            </ul>
                        </div>
                        <Link>
                            <img className="h-[80px] rounded-full" src='https://i.ibb.co/fv9mRdw/Speedy-Send.png' alt="" />
                            {/* <h2 className="text-xl font-semibold text-orange-500 hidden md:block">Bangla Bites</h2> */}
                        </Link>
                        {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-4">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div className="indicator mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                        {user ? (
                            <>

                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img className="rounded-full flex justify-center items-center mx-auto" src={user.photoURL} alt="user profile" />
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                        <li><button className="text-red-600 font-bold" onClick={handleLogout}>Log Out</button></li>
                                        <p className='ml-3'>
                                            <div className="justify-between">
                                                <h2 className='text-green-500 font-semibold'>{
                                                user.displayName}</h2>
                                            </div>
                                        </p>
                                        
                                    </ul>
                                </div>

                            </>
                        ) : (
                            <NavLink to='/login' className="btn btn-outline btn-warning">Login</NavLink>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navber;