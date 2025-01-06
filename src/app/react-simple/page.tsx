"use client";

import { useQuery } from "@tanstack/react-query";

function Page() {
   const { isPending } = useQuery({
      queryKey: ["repoData"],
      queryFn: async () => {
         const response = await fetch("https://api.github.com/repos/TanStack/query");
         return await response.json();
      },
   });

   if (isPending) return "Loading...";

   return <>Simple</>;
}

export default Page;
