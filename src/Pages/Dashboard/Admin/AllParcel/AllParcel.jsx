import { useEffect, useState } from "react";
import useAllParcels from "../../../../hooks/useAllParcels";
import useUser from "../../../../hooks/useUser";
import useAxiosSexure from "../../../../hooks/useAxiosSexure";

const AllParcel = () => {
    const [parcels, refetch] = useAllParcels();
    const [book, setBook] = useState(() => parcels);
    const [users] = useUser();
    const [selectedParcel, setSelectedParcel] = useState(null);
    const [selectedDeliveryMan, setSelectedDeliveryMan] = useState('');
    const [approximateDeliveryDate, setApproximateDeliveryDate] = useState('');
    const deliveryMen = users.filter((userData) => userData.role === 'deliverymen');

    const axiosSecure = useAxiosSexure();

    useEffect( () =>{
        setBook(parcels);
    } ,[parcels])

    const handleManageClick = (parcel) => {
        setSelectedParcel(parcel); 
        console.log('Ok');
    };


    const handleAssignDeliveryMan = async () => {
        if (!selectedParcel || !selectedDeliveryMan || !approximateDeliveryDate) {
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


    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [filteredParcels, setFilteredParcels] = useState([]);
    useEffect( () =>{
    if(!book || !book.length) return
    setFilteredParcels(book);
    } ,[book])

    const handleSearch = () => {
        const filtered = parcels.filter((parcel) => {
            const requestedDate = new Date(parcel.bookingDate);
            const start = fromDate ? new Date(fromDate) : null;
            const end = toDate ? new Date(toDate) : null;

            if (start && end) {
                return requestedDate >= start && requestedDate <= end;
            } else if (start) {
                return requestedDate >= start;
            } else if (end) {
                return requestedDate <= end;
            }

            return true;
        });

        setFilteredParcels(filtered);

    };


    const resetSearch = () => {
        setFromDate('');
        setToDate('');
        setFilteredParcels([... book]);
    };

    console.log(filteredParcels , parcels);
    return (
        <div className="mt-10">
            {/* <h2>All Parcels {parcels.length}</h2> */}

            <div className="mb-10">
            {/* <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" /> */}
                <input className="input input-bordered w-full max-w-xs mr-2" type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
                <input className="input input-bordered w-full max-w-xs" type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} />
                <button className="btn btn-outline mx-2 bg-blue-500 font-bold text-white border-none" onClick={handleSearch}>Search</button>
                <button className="btn btn-outline mx-2 bg-red-600 border-none font-bold text-white" onClick={resetSearch}>Reset</button>
            </div>

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
                            filteredParcels.map((p, index) => <tr key={p._id} >
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
                                        p.bookingStatus !== 'pending' ? <>
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

                </table>
                {selectedParcel && (
                    <dialog
                        id={`my_modal_${selectedParcel._id}`} 
                        className="modal"
                        open 
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