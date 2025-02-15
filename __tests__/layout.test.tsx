import { render, screen } from "@testing-library/react";
import RootLayout, { metadata } from "../src/app/layout";

jest.mock("next/font/google", () => ({
   Geist: () => ({
      variable: "--font-geist-sans",
      subsets: ["latin"],
   }),
   Geist_Mono: () => ({
      variable: "--font-geist-mono",
      subsets: ["latin"],
   }),
}));

describe("RootLayout", () => {
   beforeEach(() => {
      /*
       * O testing library não suporta html, body dentro de div, isso ocorre porque por padrão, o testing library
       * envolve os testes em um <div> element, tornando inviavel testar o layout.tsx que possui <html><body>
       * por isso desativei este erro neste teste por default.
       */
      jest.spyOn(console, "error").mockImplementation((message) => {
         if (typeof message === "string" && message.includes("This will cause a hydration error")) return;
         console.error(message);
      });
   });

   afterEach(() => {
      jest.restoreAllMocks();
   });

   it("Dever renderizar o html com a lang pt-BR", () => {
      render(
         <RootLayout>
            <></>
         </RootLayout>
      );

      const getHTML = document.documentElement;
      expect(getHTML.getAttribute("lang")).toBe("pt-BR");
   });

   it("Deve renderizar a tag body", () => {
      render(
         <RootLayout>
            <></>
         </RootLayout>
      );

      const body = document.body;

      expect(body).toBeInTheDocument();
   });

   it("Deve ter um children no layout", () => {
      render(
         <RootLayout>
            <div data-testid="children"></div>
         </RootLayout>
      );

      expect(screen.getByTestId("children")).toBeInTheDocument();
   });

   describe("Deve renderizar as tags de SEO corretamente", () => {
      it("Deve ter o title correto", () => {
         const title = "Create Next App";
         expect(metadata.title).toBe(title);
      });

      it("Deve ter a description correta", () => {
         const description = "Generated by create next app";
         expect(metadata.description).toBe(description);
      });
   });

   it("Deve renderizar o body com as classes das fontes corretamente", () => {
      render(
         <RootLayout>
            <></>
         </RootLayout>
      );

      const getBody = document.body;

      expect(getBody).toHaveClass("--font-geist-sans");
      expect(getBody).toHaveClass("--font-geist-mono");
      expect(getBody).toHaveClass("antialiased");
   });

   it("Deve configurar o link de navegação para Home corretamente", () => {
      render(
         <RootLayout>
            <></>
         </RootLayout>
      );

      const link = screen.getByTestId("home-link");

      expect(link).toBeInTheDocument();
      expect(link).toHaveTextContent("Home");
      expect(link).toHaveAttribute("href", "/");
   });
});
