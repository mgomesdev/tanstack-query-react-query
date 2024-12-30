import { render } from "@testing-library/react";
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

   it.todo("Deve renderizar a tag body");

   it.todo("Deve ter o children na tela");
});
