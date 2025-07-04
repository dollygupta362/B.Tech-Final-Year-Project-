// import { useQuery } from "@tanstack/react-query";
// import { getAuthUser } from "../lib/api";

// const useAuthUser = () => {
//   const authUser = useQuery({
//     queryKey: ["authUser"],
//     queryFn: getAuthUser,
//     retry: false, // auth check
//   });
//   return { isLoading: authUser.isLoading, authUser: authUser.data?.user };
// };
// export default useAuthUser;


import { useQuery } from "@tanstack/react-query";
import { getAuthUser } from "../lib/api";

const useAuthUser = () => {
  const authUser = useQuery({
    queryKey: ["authUser"],
    queryFn: async () => {
      const data = await getAuthUser();
      // console.log("user data: ",data)
      return data || { user: null }; // Ensure we always return an object
    },
    retry: false,
  });

  return { 
    isLoading: authUser.isLoading, 
    authUser: authUser.data?.user ?? null // Provide fallback
  };
};

export default useAuthUser;