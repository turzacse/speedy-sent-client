import axios from "axios";


const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
});

const useAxiosSexure = () => {
    return axiosSecure;
};

export default useAxiosSexure;