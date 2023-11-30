import { useContext } from "react";
import {FaGoogle} from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    
    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result => {
            console.log(result.user);

            const userInfo = {
                email: result?.user?.email,
                name: result?.user?.displayName,
                photo: result?.user?.photoURL

            };
            axiosPublic.post('/users', userInfo)
            .then(res => {
                console.log(res.data);
                navigate('/');
            })
            console.log(userInfo);
        })
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn} className="btn btn-outline text-green-500 btn-info mb-5">
                <FaGoogle></FaGoogle>
                Google
            </button>
        </div>
    );
};

export default SocialLogin;