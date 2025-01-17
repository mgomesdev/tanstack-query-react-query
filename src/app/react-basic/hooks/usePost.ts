import { useQuery } from "@tanstack/react-query";
import PostSchema from "../schemas/PostSchema";

const getPostById = async (id: number): Promise<PostSchema> => {
   const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
   return await response.json();
};

function usePost(postId: number) {
   return useQuery({
      queryKey: ["post", postId],
      queryFn: () => getPostById(postId),
      enabled: !!postId,
   });
}

export default usePost;
