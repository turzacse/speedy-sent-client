import { useContext, useState } from "react";
import useAxiosSexure from "../../../../hooks/useAxiosSexure";
import useParcel from "../../../../hooks/useParcel";
import { AuthContext } from "../../../../Providers/AuthProvider";
import Swal from "sweetalert2";



const MyParcel = () => {

    const [parcel, refetch] = useParcel();
    const deliverd = parcel.filter(p => p.bookingStatus === 'Delivered').length;
    const axiosSecure = useAxiosSexure();
    const [showReviewModal, setShowReviewModal] = useState(false);
    const [selectedParcel, setSelectedParcel] = useState(null);
    const { user } = useContext(AuthContext);
    console.log(parcel);

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const userName = form.userName.value;
        const userImg = form.userImg.value;
        const deliveryMen = form.deliveryMenId.value;
        const ratting = form.ratting.value;
        const feedback = form.feedback.value;
        const review = {
            userName,
            userImg,
            deliveryMen,
            ratting,
            feedback
        }
        console.log(review);
        axiosSecure.post('/review', review)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `added to your booked`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch();
                }
            })
    }

    const handleCancelBooking = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
             axiosSecure.delete(`/booking/${id}`);
             
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              refetch();
            }
          })
          .catch(err => console.log(err));
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
                            parcel?.map((p, index) => <tr key={p._id} >
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
                                            {/* <button
                                                onClick={handleReviewClick}
                                                className="btn btn-outline btn-info">Review
                                            </button> */}

                                            <button className="btn btn-outline btn-info" onClick={() => document.getElementById('my_modal_5').showModal(p.deliveryMenId)}>Review</button>
                                
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

                                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                    <div className="modal-box">

                                        <div className="modal-action">
                                            <form method="dialog">
                                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                            </form>
                                            <form className="card-body" onSubmit={handleSubmit}>

                                                <div className="flex gap-2">
                                                    <div className="form-control">
                                                        <label className="label">
                                                            <span className="label-text">Name</span>
                                                        </label>
                                                        <input name="userName" readOnly value={user?.displayName} placeholder="name" className="input input-bordered" required />
                                                    </div>
                                                    <div className="form-control">
                                                        <label className="label">
                                                            <span className="label-text">User Image</span>
                                                        </label>
                                                        <input name="userImg" readOnly value={user?.photoURL} placeholder="name" className="input input-bordered" required />
                                                    </div>
                                                </div>

                                                <div className="flex gap-2">
                                                    <div className="form-control">
                                                        <label className="label">
                                                            <span className="label-text">Delivery Men</span>
                                                        </label>
                                                        <input value={p.deliveryMenId} readOnly name="deliveryMenId" type="text" placeholder="deliveryMen" className="input input-bordered" required />
                                                    </div>
                                                    <div className="form-control">
                                                        <label className="label">
                                                            <span className="label-text">Rating</span>
                                                        </label>
                                                        <input name="ratting" placeholder="ratting out of 5"
                                                        type="text" className="input input-bordered" required />
                                                    </div>
                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Feedback</span>
                                                    </label>
                                                    <input name="feedback" type="text" placeholder="feedback" className="input input-bordered" required />
                                                </div>

                                                <div className="form-control mt-6">
                                                    <button className="btn btn-primary">Submit</button>
                                                </div>

                                            </form>
                                        </div>
                                    </div>
                                </dialog>
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