import { render, screen } from "@testing-library/react";
import Layout from "@/app/next-app-with-prefetching/layout";

jest.mock("../../src/app/next-app-with-prefetching/ReactQueryProvider", () =>
   jest.fn(({ children }: { children: React.ReactNode }) => <div data-testid="react-query-provider">{children}</div>)
);

describe("Layout", () => {
   beforeEach(() => {
      render(
         <Layout>
            <div data-testid="children"></div>
         </Layout>
      );
   });

   it("Deve ter um children no layout", () => {
      expect(screen.getByTestId("children")).toBeInTheDocument();
   });

   it("Deve fornecer o contexto do React Query", () => {
      const child = screen.getByTestId("react-query-provider");

      expect(child).toBeInTheDocument();
   });
});
