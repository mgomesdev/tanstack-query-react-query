interface PostSchema {
   userId: number;
   id: number;
   title: string;
   body: string;
}

export interface UsePostReturn {
   status: string;
   data: Array<PostSchema>;
   error: {
      message?: string;
   };
   isFetching: boolean;
}

export default PostSchema;
