import LayoutReactBasic, { metadata } from "@/app/react-basic/layout";
import { render, screen } from "@testing-library/react";
import { Metadata } from "next";

jest.mock("next", () => ({ Metadata: jest.fn() }));

jest.mock("../../src/app/react-basic/core/ProviderPersist", () => {
   const MockProvider = ({ children, ...props }: { children: React.ReactNode }) => (
      <div data-testid="mock-provider" {...props}>
         {children}
      </div>
   );

   return MockProvider;
});

describe("react-basic: Layout", () => {
   it("Deve configurar o metadata corretamente.", () => {
      const mockMetadata: Metadata = {
         title: "React Basic",
         description: "React Example: Basic",
      };

      expect(metadata).toEqual(mockMetadata);
   });

   it("Deve instanciar o ProviderPersist do ReactQuery passando um children e as props configuradas", () => {
      render(
         <LayoutReactBasic>
            <></>
         </LayoutReactBasic>
      );

      const mockProvider = screen.getByTestId("mock-provider");

      expect(mockProvider).toBeInTheDocument();
   });

   it.skip("Proximos passos", () => {
      throw [
         "Criar teste no component Layout -> Deve renderizar o PersistQueryClientProvider com children, queryClient e persistOpotions",
         "Substituir os dados constantes por variaveis (valores reais mockados) caminhando para a barra continuar verde.",
         "Revisar e remover duplicações e fazer melhorias pontuais no código.",
         "Analisar e planejar os proximos passos, criar as suites de testes e todos, rever o que foi aprendido e treinar comunicação para apresentar e explicar o que foi feito.",
         "publicar o código, fazer possiveis ajustes da codereview, verificar se a pipeline rodou, se o novo código foi publicado na homologação e atualizar/organizar os status das tarefas do jira.",
         "Iniciar pausa de 30 min para começar a proxima sessão de outra tarefa (virar a chavinha).",
      ];
   });
});
