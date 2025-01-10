import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import PostSchema from "../schemas/PostSchema";

interface UsePostsReturn {
   status: string;
   data: Array<PostSchema>;
   error: {
      message?: string;
   };
   isFetching: boolean;
}

interface PostsProps {
   setPostID: React.Dispatch<React.SetStateAction<number>>;
   usePostsTemp: UsePostsReturn;
}

async function Posts({ setPostID, usePostsTemp }: PostsProps) {
   const { status, data, error, isFetching } = usePostsTemp;

   return (
      <div>
         <h1>Posts</h1>

         <div>
            {status === "pending" ? (
               "Loading..."
            ) : status === "error" ? (
               <span>Error: {error.message}</span>
            ) : (
               <>
                  <div>
                     {data.map((post) => (
                        <p key={post.title}>
                           <Link post={post} setPostID={setPostID} label={post.title} />
                        </p>
                     ))}
                  </div>

                  <div>{isFetching && "Background Updating..."}</div>
               </>
            )}
         </div>
      </div>
   );
}

interface LinkProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
   post: PostSchema;
   label: string;
}

const Link: React.FC<LinkProps & Pick<PostsProps, "setPostID">> = ({ setPostID, post, label }) => {
   const queryClient = useQueryClient();

   return (
      <a
         href="#"
         onClick={() => setPostID(post.id)}
         style={
            queryClient.getQueryData(["post", post.id])
               ? {
                    fontWeight: "bold",
                    color: "green",
                 }
               : {}
         }
      >
         {label}
      </a>
   );
};
export default Posts;
