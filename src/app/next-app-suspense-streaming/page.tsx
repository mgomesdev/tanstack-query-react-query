"use client";

import { Suspense } from "react";
import MyComponent from "./components/MyComponent";

function Page() {
   return (
      <>
         <Suspense fallback={<div>waiting 100....</div>}>
            <MyComponent wait={100} />
         </Suspense>
         <Suspense fallback={<div>waiting 200....</div>}>
            <MyComponent wait={200} />
         </Suspense>
         <Suspense fallback={<div>waiting 300....</div>}>
            <MyComponent wait={300} />
         </Suspense>
         <Suspense fallback={<div>waiting 400....</div>}>
            <MyComponent wait={400} />
         </Suspense>
         <Suspense fallback={<div>waiting 500....</div>}>
            <MyComponent wait={500} />
         </Suspense>
         <Suspense fallback={<div>waiting 600....</div>}>
            <MyComponent wait={600} />
         </Suspense>
         <Suspense fallback={<div>waiting 700....</div>}>
            <MyComponent wait={700} />
         </Suspense>

         <fieldset>
            <legend>
               combined <code>Suspense</code>-container
            </legend>
            <Suspense
               fallback={
                  <>
                     <div>waiting 800....</div>
                     <div>waiting 900....</div>
                     <div>waiting 1000....</div>
                  </>
               }
            >
               <MyComponent wait={800} />
               <MyComponent wait={900} />
               <MyComponent wait={1000} />
            </Suspense>
         </fieldset>
      </>
   );
}

export default Page;
