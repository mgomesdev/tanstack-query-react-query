import { dehydrate, HydrationBoundary, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { getQueryClient } from "./get-query-client";

export const pokemonOptions = queryOptions({
   queryKey: ["pokemon"],
   queryFn: async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/25");

      return response.json();
   },
});

export default function Home() {
   const queryClient = getQueryClient();

   queryClient.prefetchQuery(pokemonOptions);
   return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
         <h1>Home</h1>
         <HydrationBoundary state={dehydrate(queryClient)}></HydrationBoundary>
      </div>
   );
}

export function PokemonInfo() {
   const { data } = useSuspenseQuery(pokemonOptions);

   return (
      <div>
         <figure>
            <img src={data.sprites.front_shiny} height={200} alt={data.name} />
            <h2>
               {`I'm`} {data.name}
            </h2>
         </figure>
      </div>
   );
}
