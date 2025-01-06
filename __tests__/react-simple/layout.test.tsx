import { render, screen } from "@testing-library/react";
import { Metadata } from "next";
import Layout, { metadata } from "../../src/app/react-simple/layout";

describe("Layout", () => {
   it("Deve configurar o metadata", () => {
      const mockMetadata: Metadata = {
         title: "React Simple",
         description: "React Example: Simple",
      };

      expect(mockMetadata).toEqual(metadata);
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
