import { useQuery } from "@tanstack/react-query";
import useAxiosSexure from "./useAxiosSexure";

const useUser = () => {
    const axiosSecure = useAxiosSexure();

    const { data: user =[] } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })
    return [user];
};

export default useUser;