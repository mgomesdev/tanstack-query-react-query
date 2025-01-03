import Link from "next/link";

function Home() {
   return (
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
      </ul>
   );
}

export default Home;
