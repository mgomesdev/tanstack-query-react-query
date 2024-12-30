"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface ProviderProps {
   children: React.ReactNode;
}

function Provider({ children }: ProviderProps) {
   const client = new QueryClient();

   return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}

export default Provider;
