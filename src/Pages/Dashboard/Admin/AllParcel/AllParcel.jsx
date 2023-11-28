import { useState } from "react";
import useAllParcels from "../../../../hooks/useAllParcels";
import useUser from "../../../../hooks/useUser";
import useAxiosSexure from "../../../../hooks/useAxiosSexure";

const AllParcel = () => {
    const [parcels, refetch] = useAllParcels();
    const [users] = useUser();
    const deliveryMen = users.filter((userData) => userData.role === 'deliverymen');

    const axiosSecure = useAxiosSexure();

    const [selectedParcel, setSelectedParcel] = useState(null); // State to handle selected parcel for modal display
    const [selectedDeliveryMan, setSelectedDeliveryMan] = useState('');
    const [approximateDeliveryDate, setApproximateDeliveryDate] = useState('');

    const handleManageClick = (parcel) => {
        setSelectedParcel(parcel); // Set the selected parcel to display in the modal
        console.log('Ok');
    };


    const handleAssignDeliveryMan = async () => {
        if (!selectedParcel || !selectedDeliveryMan || !approximateDeliveryDate) {
            // Ensure all fields are filled before proceeding
            // You can add a notification to fill in all fields
            return;
        }

        try {
            const updatedData = {
                bookingStatus: 'On The Way',
                deliveryMenId: selectedDeliveryMan,
                approximateDeliveryDate: approximateDeliveryDate
            };

            console.log(updatedData, selectedParcel._id);
            const response = await axiosSecure.patch(`/booking/${selectedParcel._id}`, updatedData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.status === 200) {
                // Handle success: close modal and reset fields
                setSelectedParcel(null);
                setSelectedDeliveryMan('');
                setApproximateDeliveryDate('');
                console.log('Success');
                refetch();
                // Optionally, fetch updated data or update state to reflect changes
            } else {
                const errorMessage = response.data.error || 'Failed to update parcel';
                throw new Error(`Failed to update parcel: ${errorMessage}`);
            }
        } catch (error) {
            console.error('Error updating parcel:', error);
        }
    };



    return (
        <div className="mt-10">
            <h2>All Parcels {parcels.length}</h2>

            <div className="overflow-x-auto">
                <table className="table table-pin-rows table-pin-cols">
                    <thead>
                        <tr>

                            <th></th>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Booking date</th>
                            <th>Requested date</th>
                            <th>Cost</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            parcels.map((p, index) => <tr key={p._id} >
                                <th>{index + 1}</th>
                                <td>{p.name}</td>
                                <td>{p.phoneNumber}</td>
                                <td>{p.bookingDate}</td>
                                
                                <td>{p.requestedDeliveryDate}</td>
                                <td>{p.price} TK</td>
                                {
                                    p.bookingStatus === 'pending' ? <>
                                    <td className="font-bold text-red-400">{p.bookingStatus}</td>
                                    </>
                                    :
                                    <>
                                    <td className="font-bold text-green-400">{p.bookingStatus}</td>
                                    </>
                                }
                                <td>
                                    {
                                        p.bookingStatus === 'On The Way' ? <>
                                        <button className="btn btn-warning btn-disabled">Assign</button>
                                        </>
                                            :
                                            <>
                                                <button
                                                    className="btn btn-outline btn-info"
                                                    onClick={() => handleManageClick(p)}
                                                >
                                                    Manage
                                                </button>
                                            </>
                                    }
                                </td>

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
                        </tr>
                    </tfoot>

                </table>
                {selectedParcel && (
                    <dialog
                        id={`my_modal_${selectedParcel._id}`} // Unique ID for each modal
                        className="modal"
                        open // Use the 'open' attribute to show the dialog
                    >
                        <div className="modal-box text-center">
                            <h3 className="font-bold text-center mb-4 text-lg">Assign Delivery Man</h3>
                            <select
                                value={selectedDeliveryMan}
                                onChange={(e) => setSelectedDeliveryMan(e.target.value)}
                            >
                                {/* Options for selecting delivery men */}
                                {deliveryMen.map((deliveryMan) => (
                                    <option key={deliveryMan._id} value={deliveryMan._id}>
                                        {deliveryMan.name}
                                    </option>
                                ))}
                            </select>
                            <input
                                type="date"
                                value={approximateDeliveryDate}
                                onChange={(e) => setApproximateDeliveryDate(e.target.value)}
                            />
                            <br />
                            <div className="mt-5">
                                <button className="btn btn-outline btn-success mr-4" onClick={handleAssignDeliveryMan}>
                                    Assign
                                </button>
                                <button className="btn btn-outline btn-warning" onClick={() => setSelectedParcel(null)}>
                                    Close
                                </button>
                            </div>
                        </div>
                    </dialog>
                )}
            </div>
        </div>
    );
};

export default AllParcel;