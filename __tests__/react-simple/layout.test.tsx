import { render, screen } from "@testing-library/react";
import { Metadata } from "next";
import Layout, { metadata } from "../../src/app/react-simple/layout";

jest.mock("../../src/app/core/Provider", () => {
   const MockProvider = ({ children }: { children: React.ReactNode }) => (
      <div data-testid="mock-provider">{children}</div>
   );
   return MockProvider;
});

describe("Layout", () => {
   it("Deve configurar o metadata", () => {
      const mockMetadata: Metadata = {
         title: "React Simple",
         description: "React Example: Simple",
      };

      expect(mockMetadata).toEqual(metadata);
   });

   it("Deve instanciar o Provider do ReactQuery", () => {
      render(
         <Layout>
            <></>
         </Layout>
      );

      expect(screen.getByTestId("mock-provider")).toBeInTheDocument();
   });

   it("Deve possuir um children", () => {
      render(
         <Layout>
            <div data-testid="children"></div>
         </Layout>
      );

      expect(screen.getByTestId("children")).toBeInTheDocument();
   });
});
