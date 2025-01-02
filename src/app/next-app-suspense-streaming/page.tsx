"use client";

import { Suspense } from "react";
import MyComponent from "./components/MyComponent";

function Page() {
   return (
      <Suspense fallback={"carregando"}>
         <MyComponent wait={100} />
      </Suspense>
   );
}

export default Page;
