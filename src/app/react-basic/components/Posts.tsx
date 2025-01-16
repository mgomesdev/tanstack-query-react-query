"use client";

import { useQueryClient, UseQueryResult } from "@tanstack/react-query";
import React from "react";
import PostSchema from "../schemas/PostSchema";

interface PostsProps {
   setPostID: React.Dispatch<React.SetStateAction<number>>;
   usePosts: () => UseQueryResult<PostSchema[], Error>;
}

function Posts({ setPostID, usePosts }: PostsProps) {
   const { status, data, error, isFetching } = usePosts();

   const a = usePosts();
   console.log(a);

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
                        <p key={post.id} data-testid="post-item">
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
