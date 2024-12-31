import Link from "next/link";

function Home() {
   return (
      <ul>
         <li>
            <Link href={"/next-app-with-prefetching"}>Next App With Prefetching</Link>
         </li>
         <li>
            <Link href={"/next-app-suspense-streaming"}>Next App Suspense Streaming</Link>
         </li>
      </ul>
   );
}

export default Home;
