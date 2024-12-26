import { pokemonQueryFn } from "@/app/next-app-with-prefetching/pokemon";

describe("pokemonOptions", () => {
   it("Deve retornar os dados do Pokemon corretamente", async () => {
      const fixture = {
         name: "pikachu",
         sprites: {
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png",
         },
      };

      global.fetch = jest.fn();

      (global.fetch as jest.Mock).mockResolvedValue({
         json: jest.fn().mockResolvedValue(fixture),
      });

      const data = await pokemonQueryFn();
      expect(data).toEqual(fixture);

      jest.resetAllMocks();
   });
});
