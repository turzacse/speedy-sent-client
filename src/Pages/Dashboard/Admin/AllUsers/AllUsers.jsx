import useUser from "../../../../hooks/useUser";

const AllUsers = () => {
    const [user] = useUser();
    return (
        <div>
            <h2>All Users {user.length}</h2>

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
                            user.map((p, index) => <tr key={p._id} >
                                <th>{index + 1}</th>
                                <td>{p.name}</td>
                                <td>{p.phoneNumber || 'Not Provide'}</td>
                                <td>{p.bookingDate}</td>
                                <td>{p.requestedDeliveryDate}</td>
                                <td>{p.price} TK</td>
                                <td className="font-bold text-red-400">{p.bookinStatus}</td>
                                <td><button className="btn btn-outline btn-warning">Mange</button></td>
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
            </div>
        </div>
    );
};

export default AllUsers;