import { useQuery } from "@tanstack/react-query";
import useAxiosSexure from "./useAxiosSexure";

const useSpecificuser = (email) => {
    const axiosSecure = useAxiosSexure();

    const { refetch, data: user =[] } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/:${email}`)
            return res.data
        }
    })
    return [user , refetch];
};

export default useSpecificuser;