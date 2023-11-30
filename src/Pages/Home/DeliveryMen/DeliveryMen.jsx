import Rating from "react-rating";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useReview from "../../../hooks/useReview";
import useUser from "../../../hooks/useUser";
import { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";


const DeliveryMen = () => {
    const axiosPublic = useAxiosPublic();
    const [reviews, refetch] = useReview()
    const [users] = useUser();
    console.log(reviews);
    refetch();

    const [deliveryMenStats, setDeliveryMenStats] = useState([]);

    useEffect(() => {
        const calculateStats = () => {
            const stats = {};

            reviews.forEach(review => {
                const deliveryManId = review.deliveryMen;
                const rating = parseFloat(review.ratting);

                if (!stats[deliveryManId]) {
                    stats[deliveryManId] = {
                        totalRatings: rating,
                        reviewCount: 1
                    };
                } else {
                    stats[deliveryManId].totalRatings += rating;
                    stats[deliveryManId].reviewCount++;
                }
            });

            const statsArray = [];
            for (const deliveryManId in stats) {
                const { totalRatings, reviewCount } = stats[deliveryManId];
                const averageRating = totalRatings / reviewCount;
                statsArray.push({
                    deliveryManId,
                    reviewCount,
                    averageRating: averageRating.toFixed(2)
                });
            }

            setDeliveryMenStats(statsArray);
        };

        calculateStats();
    }, [reviews]);

    const deliveryMenWithDetails = deliveryMenStats.map(deliveryMan => {
        const { deliveryManId, reviewCount, averageRating } = deliveryMan;
        const user = users.find(user => user._id === deliveryManId);

        return {
            deliveryManId,
            reviewCount,
            averageRating,
            name: user?.name || 'Unknown',
            photo: user?.photo || ''
        };
    });

    console.log(deliveryMenWithDetails);
    deliveryMenWithDetails.sort((a, b) => b.reviewCount - a.reviewCount);

    const topFiveDeliveryMen = deliveryMenWithDetails.slice(0, 5);

    console.log(topFiveDeliveryMen);

    return (
        <div>

            <div className='text-center mb-10'>
                <h1 className='md:text-5xl text-3xl font-bold text-[#05b37e] mb-5'>Elite Deliverers Showcase</h1>
                <p className='text-gray-400 md:mx-60 mx-10'>Welcome to the "Elite Deliverers Showcase," where dedication meets excellence! Meet our top 5 delivery professionals who stand out for their exceptional service. Each card presents the name, image, number of parcels delivered, and the impressive average ratings of these remarkable delivery individuals. Sorted based on the number of parcels delivered and their outstanding average ratings, these delivery experts epitomize efficiency and reliability in parcel delivery services.</p>
            </div>



            <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-4 grid-cols-1">
                {/* 1 */}
                {
                    topFiveDeliveryMen.map(men => <>
                        <div className="card bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={men.photo} alt="Shoes" className="rounded-xl shadow-inner h-[150px]" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{men.name}</h2>
                                <h2 className="font-semibold">Total Booked Parcel: {men.reviewCount}</h2>
                                <StarRatings
                                    rating={parseFloat(men.averageRating)}
                                    starDimension="30px"
                                    starSpacing="1px"
                                />
                            </div>
                        </div>
                    </>)
                }
                {/* <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/frkp1v4/team3.jpg" alt="Shoes" className="rounded-xl shadow-inner" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Abdur Rahim Mia</h2>
                        <h2>NOD: 20</h2>
                        <Rating />
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default DeliveryMen;