import Rating from "react-rating";


const DeliveryMen = () => {
    return (
        <div>

            <div className='text-center mb-10'>
                <h1 className='md:text-5xl text-3xl font-bold text-[#05b37e] mb-5'>Elite Deliverers Showcase</h1>
                <p className='text-gray-400 md:mx-60 mx-10'>Welcome to the "Elite Deliverers Showcase," where dedication meets excellence! Meet our top 5 delivery professionals who stand out for their exceptional service. Each card presents the name, image, number of parcels delivered, and the impressive average ratings of these remarkable delivery individuals. Sorted based on the number of parcels delivered and their outstanding average ratings, these delivery experts epitomize efficiency and reliability in parcel delivery services.</p>
            </div>
            


            <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1">
                {/* 1 */}
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/frkp1v4/team3.jpg" alt="Shoes" className="rounded-xl shadow-inner" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Abdur Rahim Mia</h2>
                        <h2>NOD: 20</h2>
                        <Rating />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeliveryMen;