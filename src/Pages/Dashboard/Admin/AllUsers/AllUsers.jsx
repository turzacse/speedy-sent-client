import useUser from "../../../../hooks/useUser";

const AllUsers = () => {
    const [users, refetch] = useUser();
    console.log(users);
    const filteredUsers = users.filter((userData) => userData.role === 'user');
    console.log(filteredUsers);

    const handleDeliveryMen = async(id) => {
        try {
            const response = await fetch(`http://localhost:5000/users/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ role: 'deliverymen' })
            });

            if (response.ok) {
                refetch();
                console.log('User role updated to Delivery Men');
            } else {
                console.error('Failed to update user role');
            }
        } catch (error) {
            console.error('Error updating user role:', error);
        }
    }

    const handleMakeAdmin = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/users/${id}/make-admin`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            if (response.ok) {
                refetch();
                console.log('User role updated to Admin');
            } else {
                console.error('Failed to update user role');
            }
        } catch (error) {
            console.error('Error updating user role:', error);
        }
    }
    return (
        <div>
            <h2>All Users {users.length}</h2>

            <div className="overflow-x-auto">
                <table className="table table-pin-rows table-pin-cols">
                    <thead>
                        <tr>

                            <th></th>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>No. of parcel Booked</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredUsers.map((p, index) => <tr key={p._id} >
                                <th>{index + 1}</th>
                                <td>{p.name}</td>
                                <td>{p.phoneNumber || 'Not Provide'}</td>
                                {/* //number of pacel bookend  */}
                                <td>{p.bookingDate}</td>
                                <td><button
                                onClick={() => handleDeliveryMen(p._id)}
                                className="btn btn-outline btn-warning">Make Delivery Men</button></td>
                                <td><button 
                                onClick={() => handleMakeAdmin(p._id)}
                                className="btn btn-outline btn-success">Make Admin</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;