import useUser from "../../../../hooks/useUser";

const AllDeliveryMen = () => {
    const [users, refetch] = useUser();
    const deliveryMen = users.filter((userData) => userData.role === 'deliverymen');
    console.log(deliveryMen);
    return (
        <div>
            <h2>Delivery Men</h2>

            <div className="overflow-x-auto">
                <table className="table table-pin-rows table-pin-cols">
                    <thead>
                        <tr>

                            <th></th>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>No. of parcel Booked</th>
                            <th>Avg Review</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            deliveryMen.map((p, index) => <tr key={p._id} >
                                <th>{index + 1}</th>
                                <td>{p.name}</td>
                                <td>{p.phone || 'Not Provide'}</td>
                                {/* //number of pacel bookend  */}
                                <td>later</td>
                                <td>review</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllDeliveryMen;