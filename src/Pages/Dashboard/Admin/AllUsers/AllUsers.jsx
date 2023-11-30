import { useEffect, useState } from "react";
import useUser from "../../../../hooks/useUser";
import { NavLink } from "react-router-dom";

const AllUsers = () => {
    const [users, refetch] = useUser();
    const [currentPage, setCurrentPage] = useState(1);
    const userPerPage = 5;
    const [displayedUsers, setDisplayedUsers] = useState([]);

    useEffect(() => {
        if (users.length > 0) {
            const indexOfLastUser = currentPage * userPerPage;
            const indexOfFirstUser = indexOfLastUser - userPerPage;
            setDisplayedUsers(users.slice(indexOfFirstUser, indexOfLastUser));
        }
    }, [users, currentPage, userPerPage]);
    // const indexOfLastUser = currentPage * userPerPage;
    // const indexOfFirstUser = indexOfLastUser - userPerPage;
    // const currentUser = users.slice(indexOfFirstUser, indexOfLastUser);
    console.log(users);

    const handleDeliveryMen = async (id) => {
        try {
            const response = await fetch(`https://speedy-send-server.vercel.app/users/${id}`, {
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
            const response = await fetch(`https://speedy-send-server.vercel.app/users/${id}/make-admin`, {
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

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
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
                            displayedUsers.map((p, index) => <tr key={p._id} >
                                <th>{index + 1}</th>
                                <td>{p.name}</td>
                                <td>{p.phoneNumber || 'Not Provide'}</td>
                                {/* //number of pacel bookend  */}
                                <td>{p.bookingDate}</td>
                                <td>
                                    {
                                        p.role === 'user' ? <>
                                            <button
                                                onClick={() => handleDeliveryMen(p._id)}
                                                className="btn btn-outline btn-warning">Make Delivery Men</button>
                                        </>
                                            :
                                            <>
                                                <p>{p.role}</p>
                                            </>

                                    }
                                </td>
                                <td>
                                    {
                                        p.role === 'admin' ? <>
                                            <p>Admin</p>
                                        </>
                                            :
                                            <>
                                                <button
                                                    onClick={() => handleMakeAdmin(p._id)}
                                                    className="btn btn-outline btn-success">Make Admin</button>
                                            </>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <ul className="pagination flex gap-5 text-green-600 font-extrabold mb-20">
                {Array.from({ length: Math.ceil(users.length / userPerPage) }, (_, index) => (
                    <li key={index} className={`page-item ${currentPage === index + 1 ? 'text-red-600 text-2xl' : ''}`}>
                        <button className="page-link" onClick={() => paginate(index + 1)}>
                            {index + 1}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AllUsers;