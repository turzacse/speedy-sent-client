import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaUserCircle } from "react-icons/fa";
import { RiHome8Fill, RiRedPacketFill } from "react-icons/ri";
import { IoMdLogOut } from "react-icons/io";
import { GrUserWorker } from "react-icons/gr";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaToolbox } from "react-icons/fa";
import { RiFeedbackFill } from "react-icons/ri";

// bg-[#67887e] 
const Dashboard = () => {
    return (
        <div className="flex gap-10 mx-20">
            <div className="w-60 min-h-screen bg-orange-200 ">
                <div>
                    <img className="w-3/4 mx-auto h-1/2  rounded-full" src="https://i.ibb.co/99sqTLC/logo1.png" alt="" />
                    {/* <h1 className="text-3xl font-bold text-center">Speedy Send</h1> */}
                </div>
                <ul className="menu p-4 text-lg ">
                    <li><NavLink to='/dashboard/book'><FaBook></FaBook> Book a Parcel</NavLink></li>
                    <li><NavLink to='/dashboard/myparcel'><RiRedPacketFill></RiRedPacketFill>My Parcel </NavLink></li>
                    <li><NavLink to='/dashboard/profile'><FaUserCircle></FaUserCircle>My Profile</NavLink></li>

                    {/* Admin part  */}
                    <li><NavLink to='/dashboard/allparcels'><RiRedPacketFill></RiRedPacketFill>Parcels</NavLink></li>

                    <li><NavLink to='/dashboard/alldeliverymen'><GrUserWorker></GrUserWorker> Delivery Men</NavLink></li>

                    <li><NavLink to='/dashboard/allusers'><FaPeopleGroup></FaPeopleGroup> Users</NavLink></li>

                    {/* Delivery Men Part  */}
                    <li><NavLink to='/dashboard/mydelivery'><FaToolbox></FaToolbox> My Delivery</NavLink></li>

                    <li><NavLink to='/dashboard/reviews'><RiFeedbackFill></RiFeedbackFill> Reviews</NavLink></li>


                    <div className="divider"></div>


                    <li><NavLink to='/'><RiHome8Fill /> Home</NavLink></li>
                    <li><p><IoMdLogOut /> Logout</p></li>

                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;