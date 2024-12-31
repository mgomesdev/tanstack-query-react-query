import { render, screen } from "@testing-library/react";
import Layout from "@/app/next-app-suspense-streaming/layout";

jest.mock("../../src/app/next-app-suspense-streaming/Provider", () =>
   jest.fn(({ children }: { children: React.ReactNode }) => <div data-testid="react-query-provider">{children}</div>)
);

describe("Layout", () => {
   it("Deve fornecer o contexto do React Query", () => {
      render(
         <Layout>
            <></>
         </Layout>
      );

      const child = screen.getByTestId("react-query-provider");

      expect(child).toBeInTheDocument();
   });

   it("Deve ter um children no layout", () => {
      render(
         <Layout>
            <div data-testid="children"></div>
         </Layout>
      );

      expect(screen.getByTestId("children")).toBeInTheDocument();
   });
});
