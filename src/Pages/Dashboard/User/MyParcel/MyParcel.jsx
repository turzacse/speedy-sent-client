import useParcel from "../../../../hooks/useParcel";


const MyParcel = () => {

    const [parcel] = useParcel();


    return (
        <div>
            <div className="text-center my-10">
                <h2 className="text-3xl font-bold text-orange-500 ">All of My booked parcel</h2>
            </div>
            <div className="text-2xl font-semibold mb-10 flex justify-evenly">
                <h2>Toatal Booked parcel: {parcel.length}</h2>
                <h2>Delivered parcel: 0</h2>
            </div>
            <div className="overflow-x-auto">
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
                                        p.bookinStatus === 'pending' ? <>
                                            <button className="btn btn-outline btn-warning mb-1">Update</button>
                                            <button className="btn btn-outline btn-warning">Cancel</button>
                                        </> : <>
                                        <button className="btn btn-outline btn-info">Review</button>
                                        </>
                                    }
                                </th>
                                <th>
                                    {
                                        p.bookinStatus === 'delivered' ? <>
                                            <button className="btn btn-outline btn-success">Cancel</button>
                                        </> :
                                            <>
                                                <p className="text-red-400">Not Delivered</p>
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