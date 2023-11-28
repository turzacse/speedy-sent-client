import React from 'react';
import Chart from 'react-apexcharts';

const BookingBarChart = ({ bookingsData }) => {
  const chartData = {
    options: {
      chart: {
        id: 'bookings-by-date',
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: bookingsData.map((data) => data.date), 
        labels: {
          rotate: -45,
        },
        title: {
            text: 'Booking Date',
        },
      },
      yaxis: {
        title: {
          text: 'Number of Bookings',
        },
      },
    },
    series: [
      {
        name: 'Bookings',
        data: bookingsData.map((data) => data.count),
      },
    ],
  };

  return (
    <div>
      <Chart options={chartData.options} series={chartData.series} type="bar" height={350} />
    </div>
  );
};

export default BookingBarChart;