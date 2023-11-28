import { useState } from "react";
import useAxiosSexure from "../../../../hooks/useAxiosSexure";
import useParcel from "../../../../hooks/useParcel";


const MyParcel = () => {

    const [parcel, refetch] = useParcel();
    const deliverd = parcel.filter(p => p.bookingStatus === 'Delivered').length;
    const axiosSecure = useAxiosSexure();
    const [showReviewModal, setShowReviewModal] = useState(false);
    const [selectedParcel, setSelectedParcel] = useState(null);

    const handleReviewClick = (p) => {
        setSelectedParcel(p);
        setShowReviewModal(true);
        console.log('Yes');
    };

    const handleCloseModal = () => {
        setShowReviewModal(false);
        setSelectedParcel(null);
    };

    const handleCancelBooking = async (id) => {
        try {
            await axiosSecure.delete(`/booking/${id}`);
            refetch();
            console.log('Booking deleted successfully');
        } catch (error) {
            console.error('Error deleting booking:', error);
        }
    };

    return (
        <div>
            <div className="text-center my-10">
                <h2 className="text-3xl font-bold text-orange-500 ">All of My booked parcel</h2>
            </div>
            <div className="text-2xl font-semibold mb-10 flex justify-evenly">
                <h2>Toatal Booked parcel: {parcel.length}</h2>
                <h2>Delivered parcel: {deliverd}</h2>
            </div>
            <div className="overflow-x-auto">
            {showReviewModal && (
                <div className="modal">
                    <div className="modal-content">
                        {/* Review form components */}
                        {/* Close button */}
                        <button onClick={handleCloseModal}>Close</button>
                    </div>
                </div>
            )}
                <table className="table table-pin-rows table-pin-cols">
                    <thead>
                        <tr>

                            <th></th>
                            <th>Parcel Type</th>
                            <th>Req. Delivery Date</th>
                            <th>Approximate Date</th>
                            <th>Booking date</th>
                            <th>Delivery Man</th>
                            <th>Status</th>
                            <th>Action</th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            parcel.map((p, index) => <tr key={p._id} >
                                <th>{index + 1}</th>
                                <td>{p.parcelType}</td>
                                <td>{p.requestedDeliveryDate}</td>
                                <td>{p.approximateDeliveryDate || 'Not Provide'}</td>
                                <td>{p.bookingDate}</td>
                                <td>{p.deliveryMenId || 'Not Assigned'}</td>
                                <td className="font-bold text-red-400">{p.bookingStatus}</td>
                                <th className="flex-row">
                                    {
                                        p.bookingStatus === 'Cancelled' && <>
                                            <p>Canclled</p>
                                        </>
                                    }
                                    {
                                        p.bookingStatus === 'pending' && <>
                                            <button className="btn btn-outline btn-warning mb-1">Update</button>
                                            <button
                                                onClick={() => handleCancelBooking(p._id)}
                                                className="btn btn-outline btn-warning">Cancel</button>
                                        </>
                                    }
                                    {
                                        p.bookingStatus === 'Delivered' && <>
                                            <button
                                                onClick={handleReviewClick}
                                                className="btn btn-outline btn-info">Review</button>
                                        </>
                                    }
                                </th>
                                <th>
                                    {
                                        p.bookingStatus === 'Delivered' ? <>
                                            <button className="btn btn-outline btn-success">Pay</button>
                                        </> :
                                            <>
                                                Queue
                                            </>
                                    }
                                </th>
                            </tr>)
                        }

                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Parcel Type</th>
                            <th>Req. Delivery Date</th>
                            <th>Approximate Date</th>
                            <th>Booking date</th>
                            <th>Delivery Man</th>
                            <th>Status</th>
                            <th>Action</th>
                            <th>Pay</th>
                        </tr>
                    </tfoot>
                </table>
            </div>

        </div>
    );
};

export default MyParcel;