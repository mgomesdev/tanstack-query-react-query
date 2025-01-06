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

      it.todo("Deve mostrar a mensagem de erro quando der erro na busca dos dados");

      it.todo("Deve mostrar o full_name");

      it.todo("Deve mostrar a description");

      it.todo("Deve mostrar o subscribers_count");

      it.todo("Deve mostrar o stargazers_count");

      it.todo("Deve mostrar o forks_count");

      it.todo("Deve a mensagem Updating... enquanto atualiza os dados");
   });
});
