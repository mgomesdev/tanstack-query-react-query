"use client";

import React, { useState } from "react";
import Post from "./components/Post";
import Posts from "./components/Posts";

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
