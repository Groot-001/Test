import {useQuery} from "@tanstack/react-query";
import {getPosts} from "../api/user";

// custom hook to fetch the posts via the given function and return the data so that the component calling the hook will get the data 
export const usePosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
};