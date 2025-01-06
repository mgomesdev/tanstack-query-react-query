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

      describe("Deve renderizar as informações do github", () => {
         beforeEach(() => {
            (useQuery as jest.Mock).mockReturnValue({
               isPending: false,
               error: null,
               data: {
                  full_name: "TansTack/query",
                  description: "Powerfull React Query library",
                  subscribers_count: 100,
                  stargazers_count: 5000,
                  forks_count: 300,
               },
               isFetching: false,
            });

            render(
               <Layout>
                  <Page />
               </Layout>
            );
         });

         it("Deve mostrar o full_name", () => {
            expect(screen.getByText("TansTack/query")).toBeInTheDocument();
         });

         it("Deve mostrar a description", () => {
            throw "Parei aqui, mostrar as outras informações antes de avançar.";
         });

         it.todo("Deve mostrar o subscribers_count");

         it.todo("Deve mostrar o stargazers_count");

         it.todo("Deve mostrar o forks_count");

         it.todo("Deve a mensagem Updating... enquanto atualiza os dados");
      });
   });
});
