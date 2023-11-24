import { FaLock } from "react-icons/fa6";
import { RiRunLine } from "react-icons/ri";
import { CiDeliveryTruck } from "react-icons/ci";

const Feature = () => {
    return (
        <div className="my-10 bg-orange-100 p-20">
            <div>
                <h1 className="md:text-5xl text-3xl text-center mb-10 font-bold text-[#05b37e]">Try Us And See <br /> How Good
                    Our Services Are.</h1>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10 gap-5">

                <div className="card bg-base-100 shadow-2xl pt-8">
                    <div className="flex justify-center text-5xl text-orange-500">
                        <FaLock></FaLock>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title font-bold">Secure Parcel Handling</h2>
                        <p className="text-gray-400"> We prioritize the safety and security of your parcels throughout the delivery process. Our system ensures careful handling, tracking, and monitoring, coupled with robust safety measures to safeguard your packages from pickup to delivery.</p>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-2xl pt-8">
                    <div className="flex justify-center text-5xl text-orange-500">
                        <RiRunLine></RiRunLine>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title font-bold">Lightning-Fast Delivery</h2>
                        <p className="text-gray-400">Experience swift and efficient deliveries! Our optimized logistics and route planning, along with dedicated delivery personnel, guarantee prompt and speedy parcel deliveries, ensuring your items reach their destination in record time.</p>
                    </div>
                </div>


                <div className="card bg-base-100 shadow-2xl pt-8">
                    <div className="flex justify-center text-5xl text-orange-500">
                        <CiDeliveryTruck></CiDeliveryTruck>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title font-bold">Live Parcel Tracking</h2>
                        <p className="text-gray-400"> Stay updated with real-time tracking! Monitor your parcel's journey seamlessly with live tracking features. Get instant updates on pickup, transit, and delivery status, allowing you to know exactly where your parcel is at any given moment.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;