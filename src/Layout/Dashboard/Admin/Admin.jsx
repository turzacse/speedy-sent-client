import React from 'react';
import useAllParcels from "../../../hooks/useAllParcels";
import BookingBarChart from './BookingBarChart'; // Update the path as per your file structure

const Admin = () => {
  const [parcels, refetch] = useAllParcels();

  // Process the parcels data to get bookings by date
  const bookingsByDate = parcels.reduce((accumulator, parcel) => {
    const bookingDate = parcel.bookingDate.split('T')[0]; // Extract date from requestedDeliveryDate
    if (accumulator[bookingDate]) {
      accumulator[bookingDate]++;
    } else {
      accumulator[bookingDate] = 1;
    }
    return accumulator;
  }, {});

  // Convert bookingsByDate object to an array of objects for chart
  const bookingsData = Object.keys(bookingsByDate).map((date) => ({
    date,
    count: bookingsByDate[date],
  }));

  return (
    <div>
        <div>
            <h2 className='text-center text-2xl text-orange-500 font-bold'>Statistics</h2>
            
        </div>
      <div>
         <BookingBarChart bookingsData={bookingsData} />
      </div>
    </div>
  );
};

export default Admin;
