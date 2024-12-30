import { render, screen } from "@testing-library/react";
import Provider from "@/app/next-app-suspense-streaming/Provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

jest.mock("@tanstack/react-query", () => {
   return {
      ...jest.requireActual("@tanstack/react-query"),
      QueryClient: jest.fn(),
      QueryClientProvider: jest.fn(({ children }: { children: React.ReactNode }) => <div>{children}</div>),
   };
});

describe("Provider", () => {
   beforeEach(() => {
      render(
         <Provider>
            <div data-testid="children"></div>
         </Provider>
      );
   });

   afterEach(() => jest.clearAllMocks());

   it("Deve instanciar o component Provider com um children", () => {
      expect(screen.getByTestId("children")).toBeInTheDocument();
   });

   it("Deve instanciar o QueryClientProvider com a prop client configurada com uma instancia de QueryClient", () => {
      const args = (QueryClientProvider as jest.Mock).mock.calls[0][0];

      expect(QueryClientProvider).toHaveBeenCalled();
      expect(args.client).toBeInstanceOf(QueryClient);
      expect(args.children).toBeTruthy();
   });
});
