import CountUp from 'react-countup';


const Statistics = () => {
    return (
        <div className='mb-10'>
            Data come from backend
            <div className='text-center mb-10'>
                <h1 className='md:text-5xl text-3xl font-bold text-[#05b37e] mb-5'>Parcel Odyssey  <span className='text-orange-400'>Insights in Motion</span></h1>
                <p className='text-gray-400 md:mx-60 mx-10'>Embark on a dynamic journey through the "Parcel Odyssey: Insights in Motion." Explore the pulsating life of our app with real-time statistics that unveil the number of parcels booked, triumphantly delivered shipments, and the thriving community of users. Witness the animated heartbeat of our app, depicting its vibrant, ever-evolving nature in the realm of parcel management.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10'>

                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/371dFM8/booked.jpg" alt="Shoes" className="rounded-xl h-[200px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-3xl font-bold text-[#05b37e]">Booked Parcel</h2>
                        <div className='text-5xl font-bold text-orange-400'><CountUp start={0} end={100}></CountUp></div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/8NqFpnV/deliver.png" alt="Shoes" className="rounded-xl h-[200px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-3xl font-bold text-[#05b37e]">Deliverd Parcel</h2>
                        <div className='text-5xl font-bold text-orange-400'><CountUp duration={5} start={0} end={100}></CountUp></div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/Kbq3Q8f/users.png" alt="Shoes" className="rounded-xl h-[200px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-3xl font-bold text-[#05b37e]">Our Users</h2>
                        <div className='text-5xl font-bold text-orange-400'><CountUp start={0} end={500}></CountUp></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;