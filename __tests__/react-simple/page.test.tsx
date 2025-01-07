import { render, screen } from "@testing-library/react";
import Layout from "@/app/react-simple/layout";
import Page from "@/app/react-simple/page";
import { useQuery } from "@tanstack/react-query";

jest.mock("@tanstack/react-query", () => {
   return {
      ...jest.requireActual("@tanstack/react-query"),
      useQuery: jest.fn(),
   };
});

describe("Page", () => {
   afterEach(() => jest.clearAllMocks());

   describe("Deve mostrar os dados do repositório corretamente", () => {
      it("Deve mostrar a mensagem Loading... enquanto busca os dados", () => {
         (useQuery as jest.Mock).mockReturnValue({ isPending: true });

         render(
            <Layout>
               <Page />
            </Layout>
         );

         expect(screen.getByText("Loading...")).toBeInTheDocument();
      });

      it("Deve mostrar a mensagem de erro quando der erro na busca dos dados", () => {
         (useQuery as jest.Mock).mockReturnValue({
            error: { message: "Network Error" },
         });

         render(
            <Layout>
               <Page />
            </Layout>
         );

         expect(screen.getByText("An error has ocurred: Network Error"));
      });

      it("Deve renderizar as informações do github", () => {
         const mockData = {
            full_name: "TansTack/query",
            description: "Powerfull React Query library",
            subscribers_count: 100,
            stargazers_count: 5000,
            forks_count: 300,
         };

         (useQuery as jest.Mock).mockReturnValue({
            isPending: false,
            error: null,
            data: mockData,
            isFetching: false,
         });

         render(
            <Layout>
               <Page />
            </Layout>
         );

         expect(screen.getByText(mockData.full_name)).toBeInTheDocument();
         expect(screen.getByText(mockData.description)).toBeInTheDocument();
         expect(screen.getByText(mockData.subscribers_count)).toBeInTheDocument();
         expect(screen.getByText(mockData.forks_count)).toBeInTheDocument();
      });

      it.todo("Deve a mensagem Updating... enquanto atualiza os dados");
   });
});
