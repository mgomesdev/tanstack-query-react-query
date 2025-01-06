"use client";

import { useQuery } from "@tanstack/react-query";

function Page() {
   const { isPending, error, data } = useQuery({
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
      </div>
   );
}

export default Page;
