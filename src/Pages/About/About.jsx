import { NavLink } from "react-router-dom";
import Banner from "./Banner";
import Use from "./Use";
import { FaWarehouse } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

const About = () => {
    return (
        <div>
            <Banner></Banner>
            <Use></Use>

            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row justify-between">
                        <img src="https://i.ibb.co/GQ7tg9q/c.webp" className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="lg:text-5xl text-3xl font-bold text-orange-500">Sppedy Send</h1>
                            <p className="mt-5 text-gray-500">A courier Service</p>
                            <h1 className="lg:text-4xl text-2xl font-semibold text-orange-400">Our Physical Outlet</h1>
                            <div className="mt-5">
                                <p className="flex gap-3"><FaWarehouse />410, 4th floar, Eye care, BSMRSTU</p>
                                <p className="font-bold">Gopalgong, Dhaka, Bangladesh</p>
                            </div>

                            <h1 className="lg:text-4xl text-2xl font-semibold text-orange-400 mt-10">Connect With Us---</h1>
                            <div className="mt-5 flex gap-5">
                                <p className=" text-2xl flex gap-3">
                                    <NavLink to='https://www.linkedin.com/in/turzacse/'><FaLinkedinIn /></NavLink>
                                </p>
                                <p className=" text-2xl flex gap-3">
                                    <NavLink to='https://www.facebook.com/fahimmontasir.siam/'><FaFacebookSquare /></NavLink>
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;