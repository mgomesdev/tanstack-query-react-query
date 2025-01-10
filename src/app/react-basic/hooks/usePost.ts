export const usePost = (
   postID: number
): {
   status: string;
   data: { id: number; title: string; body: string };
   error: { message?: string };
   isFetching: boolean;
} => {
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
      data: filterPosts[0],
      error: {},
      isFetching: false,
   };

   return result;
};
