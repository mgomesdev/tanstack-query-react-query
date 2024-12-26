import { queryOptions } from "@tanstack/react-query";

export const pokemonQueryFn = async () => {
   const response = await fetch("https://pokeapi.co/api/v2/pokemon/25");
   return response.json();
};

export const pokemonOptions = queryOptions({
   queryKey: ["pokemon"],
   queryFn: pokemonQueryFn,
});
