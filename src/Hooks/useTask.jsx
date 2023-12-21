import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useTask = () => {
    const axiosPublic = useAxiosPublic();
  
    const { refetch, data: alltask = [] } = useQuery({
        queryKey: ['alltask'],
        queryFn: async () => {
            const res = await axiosPublic.get("/task")
            return res.data;
        }
    })
    return [alltask, refetch]
};

export default useTask;