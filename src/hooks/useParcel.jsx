import { useQuery } from "@tanstack/react-query";
import useAxiosSexure from "./useAxiosSexure";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useParcel = () => {
    const axiosSecure = useAxiosSexure();
    const {user} = useContext(AuthContext);

    const { data: parcel =[] } = useQuery({
        queryKey: ['parcel'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/booking/${user.email}`)
            return res.data
        }
    })
    return [parcel];
};

export default useParcel;