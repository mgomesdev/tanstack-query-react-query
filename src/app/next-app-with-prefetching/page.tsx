import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "./get-query-client";
import { PokemonInfo } from "./pokemon-info";
import { pokemonOptions } from "./pokemon";

export default function Home() {
   const queryClient = getQueryClient();
   queryClient.prefetchQuery(pokemonOptions);

   return (
      <div className="w-full max-w-7xl mx-auto flex items-center justify-center font-[family-name:var(--font-geist-sans)]">
         <HydrationBoundary state={dehydrate(queryClient)}>
            <PokemonInfo />
         </HydrationBoundary>
      </div>
   );
}
