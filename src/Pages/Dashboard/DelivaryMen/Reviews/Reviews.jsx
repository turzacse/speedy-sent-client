import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import useAxiosSexure from "../../../../hooks/useAxiosSexure";
import useUser from "../../../../hooks/useUser";
import useReview from "../../../../hooks/useReview";
import StarRatings from "react-star-ratings";


const Reviews = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSexure();
    const [men, setMen] = useState([]);
    const [loading, setLoading] = useState(true);
    const [users, refetch] = useUser();
    const [reviews] = useReview();
    const [myReview, setMyReview] = useState([]);

    useEffect(() => {
        const data = users.find(d => d?.email === user?.email);
        setMen(data);
        setLoading(false);
    }, [users, user]);
    console.log(men, reviews);

    useEffect(() => {
        const data = reviews.filter(r => r?.deliveryMen === men?._id);
        setMyReview(data);
        setLoading(false);
    }, [reviews, men]);

    console.log(reviews);


    return (
        <div>
            <h2 className="text-2xl font-bold text-orange-500 text-center mb-10">All of your Review</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    myReview.map(r => <>
                        <div className="card bg-base-100 shadow-xl">
                            <figure><img className="h-[80px] w-[80px] shadow-2xl rounded-full mx-auto" src={r.userImg} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{r.userName}</h2>
                                <p>{r.feedback}</p>
                            </div>
                            <div className="text-center mb-10">
                            <StarRatings
                                rating={parseFloat(r.ratting)}
                                starDimension="30px"
                                starSpacing="1px"
                            />
                            </div>
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default Reviews;