import LayoutReactBasic, { metadata } from "@/app/react-basic/layout";
import { render, screen } from "@testing-library/react";
import { Metadata } from "next";

jest.mock("next", () => ({ Metadata: jest.fn() }));

jest.mock("../../src/app/react-basic/core/ProviderPersist", () => {
   const MockProvider = ({ children, ...props }: { children: React.ReactNode }) => (
      <div data-testid="mock-provider" {...props}>
         {children}
      </div>
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

   it("Deve instanciar o ProviderPersist do ReactQuery passando um children e as props configuradas", () => {
      render(
         <LayoutReactBasic>
            <></>
         </LayoutReactBasic>
      );

      const mockProvider = screen.getByTestId("mock-provider");

      expect(mockProvider).toBeInTheDocument();
   });
});
