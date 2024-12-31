import { render, screen, waitFor } from "@testing-library/react";
import Page from "@/app/next-app-suspense-streaming/page";
import Layout from "@/app/next-app-with-prefetching/layout";

describe("Page", () => {
   it("Deve renderizar o texto", async () => {
      render(
         <Layout>
            <Page />
         </Layout>
      );
      const wait = 100;
      const path = `/api/wait?wait=${wait}`;
      const url = `http://localhost:3000/${path}`;

      waitFor(() => {
         const result = screen.getByTestId("result");
         expect(result).toHaveTextContent(url);
      });
   });
});
