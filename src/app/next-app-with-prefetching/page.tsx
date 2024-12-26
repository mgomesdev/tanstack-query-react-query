import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "./get-query-client";
import { PokemonInfo } from "./pokemon-info";
import { pokemonOptions } from "./pokemon";

export default function Home() {
   const queryClient = getQueryClient();
   queryClient.prefetchQuery(pokemonOptions);

   return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
         <h1>Home</h1>
         <HydrationBoundary state={dehydrate(queryClient)}></HydrationBoundary>
         <PokemonInfo />
      </div>
   );
}
