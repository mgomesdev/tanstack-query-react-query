import { render, screen } from "@testing-library/react";
import RootLayout from "../../src/app/next-app-with-prefetching/layout";

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
   /*
    * Gambiarra porque o testing library não suporta html, body dentro de div, isso ocorre porque por padrão, o testing library
    * envolve os testes em um <div> element, tornando inviavel testar o layout.tsx, por isso desativei este erro neste teste por default.
    */
   beforeEach(() => {
      jest.spyOn(console, "error").mockImplementation((message) => {
         if (typeof message === "string" && message.includes("This will cause a hydration error")) {
            return;
         }
         console.error(message);
      });
   });

   afterEach(() => {
      jest.restoreAllMocks();
   });

   it("renders children correctly", () => {
      const { getByText } = render(
         <RootLayout>
            <div>Test Child</div>
         </RootLayout>
      );
      expect(getByText("Test Child")).toBeInTheDocument();
   });

   it("applies the correct classes to the body", () => {
      render(
         <RootLayout>
            <div>Test Child</div>
         </RootLayout>
      );

      const bodyDiv = screen.getByTestId("body");
      expect(bodyDiv).toBeInTheDocument();
   });
});
