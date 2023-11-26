import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";

const Profile = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
    return (
        <div className="bg-base-200 shadow-2xl ml-10">
            <div className="flex ml-20 my-20">
                <div className="w-68 min-h-screen p-8">
                <img className="h-[80px] w-[80px] rounded-full mx-auto" src={user.photoURL} alt="" />
                <h2 className="text-xl font-bold">{user.displayName}</h2>
                </div>
                <div className="flex-1 border-1">
                    
                </div>
            </div>
        </div>
    );
};

export default Profile;