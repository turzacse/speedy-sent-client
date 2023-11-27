import { useQuery } from "@tanstack/react-query";
import useAxiosSexure from "./useAxiosSexure";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useAllParcels = () => {
    const axiosSecure = useAxiosSexure();
    //const {user} = useContext(AuthContext);

    const { data: parcels =[] } = useQuery({
        queryKey: ['parcels'],
        queryFn: async () => {
            const res = await axiosSecure.get('/booking')
            return res.data
        }
    })
    return [parcels];
};

export default useAllParcels;