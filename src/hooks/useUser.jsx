import { useQuery } from "@tanstack/react-query";
import useAxiosSexure from "./useAxiosSexure";

const useUser = () => {
    const axiosSecure = useAxiosSexure();

    const { refetch, data: users =[] } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data
        }
    })
    return [users , refetch];
};

export default useUser;