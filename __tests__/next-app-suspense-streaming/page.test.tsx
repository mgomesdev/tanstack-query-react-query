import { render, screen, waitFor } from "@testing-library/react";
import Page from "@/app/next-app-suspense-streaming/page";
import Layout from "@/app/next-app-with-prefetching/layout";

jest.mock("../../src/app/next-app-suspense-streaming/components/MyComponent", () => {
   const MockedMyComponent = () => <div data-testid="mocked-mycomponent">Mocked My Component</div>;
   return MockedMyComponent;
});

describe("Page", () => {
   beforeEach(() => {});

   it("Deve renderizar o loading do suspense", () => {
      render(
         <Layout>
            <Page />
         </Layout>
      );

      waitFor(() => {
         const carregando = screen.getByText("carregando");
         expect(carregando).toBeInTheDocument();
      });
   });

   it("Deve renderizar o MyComponent", () => {
      render(
         <Layout>
            <Page />
         </Layout>
      );

      const myComponent = screen.getByTestId("mocked-mycomponent");
      expect(myComponent).toBeInTheDocument();
   });
});
