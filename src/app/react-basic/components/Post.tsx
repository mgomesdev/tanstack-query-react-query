"use client";

import { usePost } from "../hooks/usePost";

export interface PostProps {
   postID: number;
   setPostID: React.Dispatch<React.SetStateAction<number>>;
}

function Post({ postID, setPostID }: PostProps) {
   const { status, data, error, isFetching } = usePost(postID);

   return (
      <div data-testid="post-detail">
         <div>
            <a onClick={() => setPostID(-1)} href="#">
               Back
            </a>
         </div>

         {!postID || status === "pending" ? (
            "Loading..."
         ) : status === "error" ? (
            <span>Error: {error.message}</span>
         ) : (
            <>
               <h1>{data[0].title}</h1>
               <div>
                  <p>{data[0].body}</p>
               </div>
               <div>{isFetching ? "Background Updating..." : " "}</div>
            </>
         )}
      </div>
   );
}

export default Post;
