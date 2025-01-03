import Page from "@/app/next-app-suspense-streaming/page";
import Layout from "@/app/next-app-suspense-streaming/layout";
import { render, screen } from "@testing-library/react";
import { useSuspenseQuery } from "@tanstack/react-query";

jest.mock("@tanstack/react-query", () => ({
   ...jest.requireActual("@tanstack/react-query"),
   useSuspenseQuery: jest.fn(),
}));

describe("Page Component", () => {
   beforeEach(() => {
      (useSuspenseQuery as jest.Mock).mockImplementation(({ queryKey }) => {
         const wait = queryKey[1];
         return {
            data: { message: `Resolved after ${wait}ms` },
         };
      });
   });

   afterEach(() => {
      jest.clearAllMocks();
   });

   it.todo("Deve renderizar os fallbacks de waiting");

   it("should render all MyComponent instances after resolution", async () => {
      render(
         <Layout>
            <Page />
         </Layout>
      );

      expect(await screen.findByText(/Resolved after 100ms/i)).toBeInTheDocument();
      expect(await screen.findByText(/Resolved after 200ms/i)).toBeInTheDocument();
      expect(await screen.findByText(/Resolved after 300ms/i)).toBeInTheDocument();
      expect(await screen.findByText(/Resolved after 400ms/i)).toBeInTheDocument();
      expect(await screen.findByText(/Resolved after 500ms/i)).toBeInTheDocument();
      expect(await screen.findByText(/Resolved after 600ms/i)).toBeInTheDocument();
      expect(await screen.findByText(/Resolved after 700ms/i)).toBeInTheDocument();
      expect(await screen.findByText(/Resolved after 800ms/i)).toBeInTheDocument();
      expect(await screen.findByText(/Resolved after 900ms/i)).toBeInTheDocument();
      expect(await screen.findByText(/Resolved after 1000ms/i)).toBeInTheDocument();
   });
});
