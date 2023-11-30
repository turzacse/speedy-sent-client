import { useQuery } from '@tanstack/react-query';
import useAxiosSexure from './useAxiosSexure';

const useReview = () => {
    const axiosSecure = useAxiosSexure();

    const { refetch, data: reviews =[] } = useQuery({
        queryKey: ['review'],
        queryFn: async () => {
            const res = await axiosSecure.get('/review')
            return res.data
        }
    })
    return [reviews , refetch];
};

export default useReview;