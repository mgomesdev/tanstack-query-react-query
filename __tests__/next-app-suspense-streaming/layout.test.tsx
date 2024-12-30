import { render, screen } from "@testing-library/react";
import Layout from "@/app/next-app-suspense-streaming/layout";

describe("Layout", () => {
   beforeEach(() => {
      jest.spyOn(console, "error").mockImplementation((message: string) => {
         if (typeof message === "string" && message.includes("cannot be a child of")) {
            return;
         }

         console.error(message);
      });
   });

   afterEach(() => jest.resetAllMocks());

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
});
