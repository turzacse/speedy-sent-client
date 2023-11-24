import React from 'react';

const Banner = () => {
    return (
        <div className='my-10'>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/wKZQ8Lb/b.webp)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 lg:text-5xl font-bold text-orange-400">Reliable Service Every Time</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        
                        <div className="join">
                            <input type="text" placeholder="Search here" className="pl-3 input-bordered join-item" />
                            <button className="btn btn-outline btn-warning join-item">Search</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;