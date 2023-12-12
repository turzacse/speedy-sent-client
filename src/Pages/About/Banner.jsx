import React from 'react';
import { NavLink } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/wKZQ8Lb/b.webp)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">About Us</h1>
                        <p className="mb-5">Its a courier service type web based project. Here implemented the different dashboard for user, deliveryMen and Admin(Special User). An user can booked a parchel providing the actual info, than the Admin can assign a deliverymen for this parcel. After that this deliverymen can manage this parcels.</p>
                        <NavLink to='/'><button className='btn btn-outline'>Home</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;