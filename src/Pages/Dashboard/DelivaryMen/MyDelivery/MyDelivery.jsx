import { useContext } from "react";
import useAllParcels from "../../../../hooks/useAllParcels";
import useUser from "../../../../hooks/useUser";
import { AuthContext } from "../../../../Providers/AuthProvider";
import { GrDeliver } from "react-icons/gr";
import { GiCancel } from "react-icons/gi";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import useAxiosSexure from "../../../../hooks/useAxiosSexure";


const MyDelivery = () => {
    const [parcels, refetch] = useAllParcels();
    const [users] = useUser();
    const { user } = useContext(AuthContext);
    const [myDelivery, setMyDelivery] = useState([]);
    const deliveryMen = users.find(men => men.email === user.email);
    const axiosSecure = useAxiosSexure();

    useEffect(() => {
        if (deliveryMen) {
            const delivery = parcels.filter((p) => p.deliveryMenId === deliveryMen._id);
            setMyDelivery(delivery);
        }
    }, [parcels, deliveryMen])

    const handleCancelBooking = async (id) => {
        try {
            const confirmed = window.confirm('Are you sure you want to cancel this booking?');
            if (confirmed) {
                await axiosSecure.patch(`/booking/${id}`, { bookingStatus: 'Cancelled' });
                refetch();
                alert('Booking has been cancelled');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleDeliverBooking = async (id) => {
        try {
            const confirmed = window.confirm('Are you sure you want to mark this booking as delivered?');
            if (confirmed) {
                await axiosSecure.patch(`/booking/${id}`, { bookingStatus: 'Delivered' });
                refetch();
                alert('Booking has been marked as delivered');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const pending = myDelivery.filter(d => d.bookingStatus === 'On The Way').length;
    const delivered = myDelivery.filter(d => d.bookingStatus === 'Deliverd').length;
    console.log(myDelivery);
    return (
        <div>
            <div>
                <h2 className="text-2xl">Total Pending Deliver: {pending}</h2>
            </div>
            <div>
                <h2>Total Delivered : {delivered}</h2>
            </div>

            <div className="overflow-x-auto">
                <table className="table table-xs table-pin-rows table-pin-cols">
                    <thead>
                        <tr>

                            <th></th>
                            <th>Booked by-</th>
                            <th>Phone Number</th>
                            <th>Receiver Name</th>
                            <th>Receiver Number</th>
                            <th>Req. Delivery Date</th>
                            <th>Apro. Delivery Date</th>
                            <th>Address</th>
                            <th>Location</th>
                            <th>Action</th>
                            {/* <th className="text-xl flex gap-2">
                                <button><GrDeliver /></button>
                                <button><GiCancel /></button>
                            </th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myDelivery.map((p, index) => <tr key={p._id} >
                                <th>{index + 1}</th>
                                <td>{p.name}</td>
                                <td>{p.phoneNumber || 'Not Provide'}</td>
                                <td>{p.receiverName}</td>
                                <td>{p.receiverPhoneNumber}</td>
                                <td>{p.requestedDeliveryDate}</td>
                                <td>{p.approximateDeliveryDate}</td>
                                <td>{p.deliveryAddress}</td>
                                <td><button>See</button></td>
                                <td className="text-xl flex gap-2">
                                    {
                                        p.bookingStatus !== 'On The Way' ? <>
                                            {p.bookingStatus}
                                        </>
                                            :
                                            <>
                                                <button className="btn text-green-500"
                                                    onClick={() => handleDeliverBooking(p._id)}>
                                                    <GrDeliver />
                                                </button>
                                                <button className="btn text-red-500"
                                                    onClick={() => handleCancelBooking(p._id)}>
                                                    <GiCancel />
                                                </button>
                                            </>
                                    }

                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyDelivery;