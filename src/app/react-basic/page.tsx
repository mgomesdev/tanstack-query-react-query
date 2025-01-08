import React, { useState } from "react";

interface PostsProps extends Pick<PostProps, "setPostID"> {}

const Posts: React.FC<PostsProps> = ({ setPostID }) => {
   return <div data-testid="posts-list">posts</div>;
};

interface PostProps {
   postID: number;
   setPostID: React.Dispatch<React.SetStateAction<number>>;
}

const Post: React.FC<PostProps> = ({ postID, setPostID }) => {
   return <div data-testid="post-detail">PostID: {postID}</div>;
};

function PageReactBasic() {
   const [postID, setPostID] = useState(-1);

   return (
      <div>
         <p>
            As you visit the posts below, you will notice them in a loading state the first time you load them. However,
            after you return to this list and click on any posts you have already visited again, you will see them load
            instantly and background refresh right before your eyes!
            <strong>(You may need to throttle your network speed to simulate longer loading sequences)</strong>
         </p>

         {postID > -1 ? <Post postID={postID} setPostID={setPostID} /> : <Posts setPostID={setPostID} />}
      </div>
   );
}

export default PageReactBasic;
