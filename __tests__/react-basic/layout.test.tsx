import LayoutReactBasic, { metadata } from "@/app/react-basic/layout";
import { render, screen } from "@testing-library/react";
import { Metadata } from "next";

jest.mock("next", () => ({ Metadata: jest.fn() }));

jest.mock("../../src/app/core/Provider", () => {
   const MockProvider = ({ children }: { children: React.ReactNode }) => (
      <div data-testid="mock-provider">{children}</div>
   );

   return MockProvider;
});

describe("react-basic: Layout", () => {
   it("Deve configurar o metadata corretamente.", () => {
      const mockMetadata: Metadata = {
         title: "React Basic",
         description: "React Example: Basic",
      };

      expect(metadata).toEqual(mockMetadata);
   });

   it("Deve instanciar o Provider do ReactQuery passando um children", () => {
      render(
         <LayoutReactBasic>
            <></>
         </LayoutReactBasic>
      );

      expect(screen.getByTestId("mock-provider")).toBeInTheDocument();
   });
});
