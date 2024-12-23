"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { getQueryClient } from "./get-query-client";

interface ReactQueryProviderProps {
   children: React.ReactNode;
}

export default function ReactQueryProvider({ children }: ReactQueryProviderProps) {
   const queryClient = getQueryClient();

   return (
      <QueryClientProvider client={queryClient}>
         {children}
         <ReactQueryDevtools />
      </QueryClientProvider>
   );
}
