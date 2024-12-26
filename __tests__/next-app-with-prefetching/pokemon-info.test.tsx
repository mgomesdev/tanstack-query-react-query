import { render, screen } from "@testing-library/react";
import { PokemonInfo } from "@/app/next-app-with-prefetching/pokemon-info";
import { QueryClient, QueryClientProvider, useSuspenseQuery } from "@tanstack/react-query";

jest.mock("@tanstack/react-query", () => {
   return {
      ...jest.requireActual("@tanstack/react-query"),
      useSuspenseQuery: jest.fn(),
   };
});

describe("Deve renderizar a tela de informações do pokemon corretamente", () => {
   const queryClient = new QueryClient();

   beforeEach(() => {
      (useSuspenseQuery as jest.Mock).mockReturnValue({
         data: {
            name: "pikachu",
            sprites: {
               front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png",
            },
         },
      });

      render(
         <QueryClientProvider client={queryClient}>
            <PokemonInfo />
         </QueryClientProvider>
      );
   });

   it("Deve renderizar o container da pagina", () => {
      const container = screen.getByTestId("pokemon-container");
      expect(container).toBeInTheDocument();
   });

   it("Deve renderizar o figure", () => {
      const figure = screen.getByTestId("pokemon-figure");
      expect(figure).toBeInTheDocument();
   });

   describe("Deve renderizar a imagem corretamente", () => {
      it("A imagem deve ter um src configurado", () => {
         const image = screen.getByTestId("pokemon-image");
         const src = image.getAttribute("src");

         expect(src).not.toBe("");
      });

      it("A imagem deve ter um width e height configurado", () => {
         const image = screen.getByTestId("pokemon-image");
         const width = image.getAttribute("width");
         const height = image.getAttribute("height");

         expect(width).not.toBe("");
         expect(height).not.toBe("");
      });

      it("A imagem deve ter um alt configurado", () => {
         const image = screen.getByTestId("pokemon-image");
         const alt = image.getAttribute("alt");

         expect(alt).not.toBe("");
      });
   });

   it("Deve renderizar o nome do pokemon corretamente", () => {
      const name = screen.getByTestId("pokemon-name");

      expect(name).toHaveTextContent("I'm pikachu");
   });
});
