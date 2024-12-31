import { render, screen } from "@testing-library/react";
import Layout from "@/app/next-app-with-prefetching/layout";

jest.mock("../../src/app/next-app-with-prefetching/ReactQueryProvider", () =>
   jest.fn(({ children }: { children: React.ReactNode }) => <div data-testid="react-query-provider">{children}</div>)
);

describe("Layout", () => {
   beforeEach(() => {
      jest.spyOn(console, "error").mockImplementation((message) => {
         if (typeof message === "string" && message.includes("This will cause a hydration error")) return;
         console.error(message);
      });
   });

   afterEach(() => {
      jest.restoreAllMocks();
   });

   it("Deve ter um children no layout", () => {
      render(
         <Layout>
            <div data-testid="children"></div>
         </Layout>
      );

      expect(screen.getByTestId("children")).toBeInTheDocument();
   });

   it("Deve configurar a prop lang como pt-BR", () => {
      render(
         <Layout>
            <></>
         </Layout>
      );

      const html = document.documentElement;

      expect(html).toBeInTheDocument();
      expect(html.getAttribute("lang")).toBe("pt-BR");
   });

   it("Deve renderizar a tag body", () => {
      render(
         <Layout>
            <></>
         </Layout>
      );

      const body = document.body;

      expect(body).toBeInTheDocument();
   });

   it("Deve fornecer o contexto do React Query", () => {
      render(
         <Layout>
            <></>
         </Layout>
      );

      const child = screen.getByTestId("react-query-provider");

      expect(child).toBeInTheDocument();
   });
});
