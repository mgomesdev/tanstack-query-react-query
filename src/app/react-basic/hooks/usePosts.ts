import { UsePostReturn } from "../schemas/PostSchema";

export const usePosts = (): UsePostReturn => {
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

   const result = {
      status: "pending",
      data: posts,
      error: {},
      isFetching: false,
   };

   return result;
};
