import { useQuery } from "@tanstack/react-query";
import PostSchema from "../schemas/PostSchema";

export function usePosts() {
   return useQuery({
      queryKey: ["posts"],
      queryFn: async (): Promise<PostSchema[]> => {
         const response = await fetch("https://jsonplaceholder.typicode.com/posts");
         return await response.json();
      },
   });
}
