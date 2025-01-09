export interface PostProps {
   postID: number;
   setPostID: React.Dispatch<React.SetStateAction<number>>;
}

function Post({ postID, setPostID }: PostProps) {
   const { status, data, error, isFetching } = {
      status: "ok",
      data: {
         title: "title",
         body: "body",
      },
      error: null,
      isFetching: false,
   };

   return (
      <div data-testid="post-detail">
         <div>
            <a onClick={() => setPostID(-1)} href="#">
               Back
            </a>
         </div>
      </div>
   );
}

export default Post;
