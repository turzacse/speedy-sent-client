import { useQuery } from "@tanstack/react-query";
import useAxiosSexure from "./useAxiosSexure";

const useAllParcels = () => {
    const axiosSecure = useAxiosSexure();
    //const {user} = useContext(AuthContext);

    const { refetch, data: parcels =[] } = useQuery({
        queryKey: ['parcels'],
        queryFn: async () => {
            const res = await axiosSecure.get('/booking')
            return res.data
        }
    })
    return [parcels, refetch];
};

export default useAllParcels;