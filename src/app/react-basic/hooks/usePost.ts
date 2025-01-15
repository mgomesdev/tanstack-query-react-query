import PostSchema from "../schemas/PostSchema";

export interface UsePostReturn {
   status: string;
   data: Array<PostSchema>;
   error: {
      message?: string;
   };
   isFetching: boolean;
}

export const usePost = (postID: number): UsePostReturn => {
   const posts = [
      {
         id: 1,
         title: "title1",
         body: "body1",
      },
      {
         id: 2,
         title: "title2",
         body: "body2",
      },
   ];

   const filterPosts = posts.filter((post) => post.id === postID);

   const result = {
      status: "pending",
      data: filterPosts,
      error: {},
      isFetching: false,
   };

   return result;
};
