import MyComponent from "@/app/next-app-suspense-streaming/components/MyComponent";
import Layout from "@/app/next-app-with-prefetching/layout";
import { useSuspenseQuery } from "@tanstack/react-query";
import { render, screen, waitFor } from "@testing-library/react";

jest.mock("@tanstack/react-query", () => {
   return {
      ...jest.requireActual("@tanstack/react-query"),
      useSuspenseQuery: jest.fn(),
   };
});

describe("MyComponent", () => {
   it("Deve renderizar o resultado na tela", async () => {
      (useSuspenseQuery as jest.Mock).mockReturnValue({
         data: {
            message: "waited for 100ms",
         },
      });

      render(
         <Layout>
            <MyComponent wait={100} />
         </Layout>
      );

      await waitFor(() => {
         expect(screen.getByTestId("result")).toHaveTextContent("waited for 100ms");
      });
   });
});
