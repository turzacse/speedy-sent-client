import React from 'react';

const Secrete = () => {
    return (
        <div>
            <div className='text-5xl text-center font-bold text-orange-500 my-16'>
                <h2>Our Photo Galary</h2>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 mb-10 md:mx-10 mx-4'>
                <img className='h-[250px] w-[300px] shadow-2xl rounded-2xl' src="https://i.ibb.co/y46H3fY/img8.webp" alt="" />
                <img className='h-[250px] w-[300px] shadow-2xl rounded-2xl' src="https://i.ibb.co/frvMmVs/img7.webp" alt="" />
                <img className='h-[250px] w-[300px] shadow-2xl rounded-2xl' src="https://i.ibb.co/mHt303Q/img6.webp" alt="" />
                <img className='h-[250px] w-[300px] shadow-2xl rounded-2xl' src="https://i.ibb.co/v3f8455/img5.webp" alt="" />
                <img className='h-[250px] w-[300px] shadow-2xl rounded-2xl' src="https://i.ibb.co/CbQYnGr/img4.webp" alt="" />
                <img className='h-[250px] w-[300px] shadow-2xl rounded-2xl' src="https://i.ibb.co/W6KH6ZD/img3.webp" alt="" />
                <img className='h-[250px] w-[300px] shadow-2xl rounded-2xl' src="https://i.ibb.co/n0R8K36/img1.jpg" alt="" />
                <img className='h-[250px] w-[300px] shadow-2xl rounded-2xl' src="https://i.ibb.co/Bc3SJwG/img2.webp" alt="" />
            </div>
        </div>
    );
};

export default Secrete;