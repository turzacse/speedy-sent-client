import { useContext, useState } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import useAxiosSexure from "../../../../hooks/useAxiosSexure";
import Swal from "sweetalert2";


const Book = () => {
    const { user } = useContext(AuthContext);
    const [price, setPrice] = useState(0);
    const [weight, setweight] = useState(0);
    const axiosSecure = useAxiosSexure();


    const calculatePrice = (weight) => {
        var parcelPrice = 0;
        if (weight == 0) parcelPrice = 0;
        else if (weight <= 1 && weight > 0) parcelPrice = 50;
        else if (weight <= 2) parcelPrice = 100;
        else parcelPrice = 150;
        setPrice(parcelPrice);
    };

    const handleWeight = (event) => {
        var weight = Number(event.target.value);
        setweight(weight);
        calculatePrice(weight);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const phoneNumber = form.phoneNumber.value;
        const parcelType = form.parcelType.value;
        const parcelWeight = form.parcelWeight.value;
        const receiverName = form.receiverName.value;
        const receiverPhoneNumber = form.receiverPhoneNumber.value;
        const deliveryAddress = form.deliveryAddress.value;
        const requestedDeliveryDate = form.requestedDeliveryDate.value;
        const deliveryAddressLatitude = form.deliveryAddressLatitude.value;
        const deliveryAddressLongitude = form.deliveryAddressLongitude.value;
        const price = form.price.value;

        const booking = { name, email, phoneNumber, parcelType, parcelWeight, receiverName, receiverPhoneNumber, deliveryAddress, requestedDeliveryDate, deliveryAddressLatitude, deliveryAddressLongitude, price };
        console.log(booking);

        
        axiosSecure.post('/booking', booking)
            .then(res => {
                console.log(res.data)
                if (res.data.message) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `added to your booked`,
                        showConfirmButton: false,
                        timer: 1500
                    }); 
                }

            })

    };

    return (
        <div>
            Book a parcel
            <div className="bg-base-200 shadow-2xl rounded-xl ml-10">
                <h2 className="text-3xl font-bold pt-10 text-center text-orange-500">Booking Your Parcel</h2>
                <form
                    onSubmit={handleSubmit}
                    className="card-body">

                    {/* row-1  */}
                    <div className="flex gap-3">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                readOnly
                                value={user.displayName}
                                name="name"
                                type="text" className="input input-bordered" required />
                        </div>

                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                name="email"
                                readOnly value={user.email}
                                type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                    </div>

                    {/* row-2  */}
                    <div className="flex gap-3">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input
                                placeholder="Your Phone Number"
                                // //defaultValue={formData.phoneNumber}
                                name="phoneNumber"
                                type="text" className="input input-bordered" required />
                        </div>

                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Parcel Type</span>
                            </label>
                            <input
                                name="parcelType"
                                // //defaultValue={formData.parcelType}
                                type="text" placeholder="Parcel Type" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Parcel Weight</span>
                            </label>
                            <input
                                name="parcelWeight"
                                //defaultValue={formData.parcelWeight}
                                type="text"
                                onChange={handleWeight}
                                placeholder="Parcel Weight" className="input input-bordered" required />
                        </div>
                    </div>

                    {/* row-3  */}
                    <div className="flex gap-3">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Receiver's Name</span>
                            </label>
                            <input
                                placeholder="Receiver's Name"
                                //defaultValue={formData.receiverName}
                                name="receiverName"
                                type="text" className="input input-bordered" required />
                        </div>

                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Receiver's Phone number</span>
                            </label>
                            <input
                                name="receiverPhoneNumber"
                                //defaultValue={formData.receiverPhoneNumber}
                                type="text" placeholder="Receiver's Phone Number" className="input input-bordered" required />
                        </div>
                    </div>

                    {/* row - 4 */}
                    <div className="flex gap-3">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Parcel Delivery Address</span>
                            </label>
                            <input
                                placeholder="Address"
                                //defaultValue={formData.deliveryAddress}
                                name="deliveryAddress"
                                type="text" className="input input-bordered" required />
                        </div>

                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Requested Delivery Date</span>
                            </label>
                            <input
                                name="requestedDeliveryDate"
                                //defaultValue={formData.requestedDeliveryDate}
                                type="date" placeholder="date" className="input input-bordered" required />
                        </div>
                    </div>

                    {/* row-5  */}
                    <div className="flex gap-3">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Delivery latitude</span>
                            </label>
                            <input
                                placeholder="latitute"
                                //defaultValue={formData.deliveryAddressLatitude}
                                name="deliveryAddressLatitude"
                                type="text" className="input input-bordered" required />
                        </div>

                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Delivery Longitude</span>
                            </label>
                            <input
                                name="deliveryAddressLongitude"
                                //defaultValue={formData.deliveryAddressLongitude}
                                type="text" placeholder="longitude" className="input input-bordered" required />
                        </div>
                    </div>

                    {/* row-6  */}

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input
                            readOnly
                            placeholder="Price"
                            value={price}
                            name="price"
                            className="input input-bordered" required />
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn bg-[#0aa879]">Book</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Book;