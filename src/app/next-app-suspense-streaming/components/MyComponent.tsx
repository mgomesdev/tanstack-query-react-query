import { useSuspenseQuery } from "@tanstack/react-query";

interface MyComponentProps {
   wait: number;
}

function MyComponent({ wait = 100 }: MyComponentProps) {
   const query = useSuspenseQuery<{ message: string }>({
      queryKey: ["wait", wait],
      queryFn: async () => {
         const path = `/next-app-suspense-streaming/api/wait?${wait}`;
         const url = `http://localhost:3000${path}`;

         const req = await fetch(url, {
            cache: "no-store",
         });

         const res = await req.json();

         return res;
      },
   });

   const data = {
      query,
      data: query.data,
   };

   return <div data-testid="my-component">result: {data.data?.message}</div>;
}

export default MyComponent;
