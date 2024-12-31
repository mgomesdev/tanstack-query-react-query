"use client";

import { Suspense } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";

interface MyComponentProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const MyComponent: React.FC<MyComponentProps> = () => {
   const wait = 100;

   const query = useSuspenseQuery({
      queryKey: ["wait", wait],
      queryFn: async () => {
         const path = `/api/wait?wait=${wait}`;
         const url = `http://localhost:3000/${path}`;

         /* const req = await fetch(url, {
            cache: "no-store",
         });

         const res = await req.json();

         return res; */

         return url;
      },
   });

   const data = {
      query,
      data: query.data,
   };

   return <div data-testid="result">result: {data.data}</div>;
};

function Page() {
   return (
      <Suspense fallback={"carregnado"}>
         <MyComponent />
      </Suspense>
   );
}

export default Page;
