"use client";

import { isServer, QueryClient, QueryClientProvider } from "@tanstack/react-query";

const makeQueryClient = () => {
   return new QueryClient({
      defaultOptions: {
         queries: {
            staleTime: 60 * 1000, // 1 min.
         },
      },
   });
};

let browserQueryClient: QueryClient | undefined = undefined;

const getQueryClient = () => {
   if (isServer) {
      return makeQueryClient();
   } else {
      if (!browserQueryClient) browserQueryClient = makeQueryClient();

      return browserQueryClient;
   }
};

interface ProviderProps {
   children: React.ReactNode;
}

function Provider({ children }: ProviderProps) {
   return <QueryClientProvider client={getQueryClient()}>{children}</QueryClientProvider>;
}

export default Provider;
