"use client";

import { useQuery } from "@tanstack/react-query";
import TanStackQueryApiResponseSchema from "./schema/TanStackQueryApiSchema";

function Page() {
   const { isPending, isFetching, error, data } = useQuery<TanStackQueryApiResponseSchema>({
      queryKey: ["repoData"],
      queryFn: async () => {
         const response = await fetch("https://api.github.com/repos/TanStack/query");
         return await response.json();
      },
   });

   if (isPending) return "Loading...";

   if (error) return "An error has ocurred: " + error.message;

   return (
      <div>
         <h1>{data.full_name}</h1>
         <p>{data.description}</p>
         <strong>
            <span>👀</span> {data.subscribers_count}
         </strong>
         <strong>
            <span>✨</span> {data.stargazers_count}
         </strong>
         <strong>
            <span>🍴</span> {data.forks_count}
         </strong>
         <div>{isFetching ? "Updating..." : ""}</div>
      </div>
   );
}

export default Page;
