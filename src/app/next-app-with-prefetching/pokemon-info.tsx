"use client";

import Image from "next/image";
import { useSuspenseQuery } from "@tanstack/react-query";
import { pokemonOptions } from "@/app/next-app-with-prefetching/pokemon";

export function PokemonInfo() {
   const { data } = useSuspenseQuery(pokemonOptions);

   return (
      <div data-testid="pokemon-container">
         <figure data-testid="pokemon-figure">
            <Image
               data-testid="pokemon-image"
               src={data.sprites.front_shiny}
               width={200}
               height={200}
               alt={data.name}
            />
            <h2 data-testid="pokemon-name">
               {`I'm `}
               {data.name}
            </h2>
         </figure>
      </div>
   );
}
