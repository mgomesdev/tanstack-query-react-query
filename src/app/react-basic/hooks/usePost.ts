export const usePost = (
   postID: number
): {
   status: "pending" | "error";
   data: { title: string; body: string };
   error: { message?: string };
   isFetching: boolean;
} => {
   return {
      status: "pending",
      data: {
         title: "title",
         body: "body",
      },
      error: {},
      isFetching: false,
   };
};
