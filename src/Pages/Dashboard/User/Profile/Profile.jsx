import { useContext, useState } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import useUser from "../../../../hooks/useUser";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";

const image_hosting = import.meta.env.VITE_IMAGE_HOSTING;
const image_hosting_key = `https://api.imgbb.com/1/upload?key=${image_hosting}`;

const Profile = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const [users, refetch] = useUser();
    const [profileImg, setProfileImg] = useState();
    console.log(users);
    const logger = users.filter(p => p.email === user.email);
    //console.log(profile[0], profile[0].photo);
    const profile = logger[0];
    console.log(profile);
    console.log(logger);
    const axiosPublic = useAxiosPublic();

    const handleUpload = async (event) => {
        const selectedFile = event.target.files[0];
        try {
            const formData = new FormData();
            formData.append("image", selectedFile);

            const response = await axiosPublic.post(image_hosting_key, formData);

            if (response.status === 200) {
                const imageUrl = response.data.data.url;
                const updatedUser = { ...profile, photo: imageUrl };

                setProfileImg(updatedUser);

                await axiosPublic.put(`/users/${profile._id}/photo`, { photo: imageUrl });
                
                refetch();
            }
        } catch (error) {
            console.error("Error uploading profile picture:", error);
        }
    };


    return (
        <div className="bg-green-500 text-gray-700  pb-8 shadow-2xl rounded-3xl ml-10 ">
            <div className="flex ml-20 my-20 pt-20">
                <div className="w-68  p-8">
                    <img className="h-[80px] w-[80px] shadow-2xl rounded-2xl mx-auto" src={profile?.photo} alt="" />
                </div>
                <div className="flex-1 border-1">
                    <h2 className="bg-yellow-200 mt-8 w-1/2 p-2 rounded-xl font-bold text-2xl">Name : {profile?.name}</h2>
                    <h2 className="bg-yellow-200 mt-8 w-1/2 p-2 rounded-xl font-se,mibold text-xl">Email : {profile?.email}</h2>
                    <h2 className="bg-yellow-200 mt-8 w-1/2 p-2 rounded-xl font-se,mibold text-xl">Phone : {profile?.phone}</h2>
                    <h2 className="bg-yellow-200 mt-8 w-1/2 p-2 rounded-xl font-se,mibold text-lg">Change or Update Your Image?
                        <button className="btn btn-outline border-none text-green-500" onClick={() => document.getElementById('my_modal_5').showModal()}> Update</button>
                    </h2>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <input
                                type="file"
                                className="mt-4"
                                accept="image/*"
                                onChange={handleUpload} // Handle the file upload
                            />
                            <div className="modal-action">
                                <form method="dialog">
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default Profile;

//39cd3de230380fc39b116f0d1af689bd