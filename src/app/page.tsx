import Link from "next/link";

function Home() {
   return (
      <div className="size-full min-h-[100vh] flex items-center justify-center">
         <ul>
            <li>
               <Link data-testid="next-app-with-prefetching-link" href={"/next-app-with-prefetching"}>
                  Next App With Prefetching
               </Link>
            </li>
            <li>
               <Link data-testid="next-app-suspense-streaming-link" href={"/next-app-suspense-streaming"}>
                  Next App Suspense Streaming
               </Link>
            </li>

            <li>
               <Link data-testid="react-simple" href={"/react-simple"}>
                  React Simple
               </Link>
            </li>
         </ul>
      </div>
   );
}

export default Home;
