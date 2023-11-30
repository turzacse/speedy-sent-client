import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import useUser from "../../../../hooks/useUser";

const Profile = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const [users, refetch] = useUser();
    console.log(users);
    const logger = users.filter(p => p.email === user.email);
    //console.log(profile[0], profile[0].photo);
    const profile = logger[0];
    console.log(profile);

    return (
        <div className="bg-green-500 text-gray-700 shadow-2xl rounded-3xl ml-10 ">
            <div className="flex ml-20 my-20 pt-20">
                <div className="w-68  p-8">
                    <img className="h-[80px] w-[80px] shadow-2xl rounded-full mx-auto" src={profile?.photo} alt="" />
                    <h2 className="text-xl font-bold">{profile?.name}</h2>
                </div>
                <div className="flex-1 border-1 ">
                    <h2 className="text-2xl text-center font-bold">User Profile</h2>
                    <form className="card-body text-black mb-20 mr-10">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input readOnly value={profile?.name} placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input readOnly value={profile?.email} placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input type="text" defaultValue={profile?.phoneNumber || 'Not provided! Please Update Your Phone'} placeholder="phone" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input defaultValue={profile?.photo} placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-outline">Update profile</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;