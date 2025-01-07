describe("react-basic: Page", () => {
   it("Deve renderizar a frase de chamada", () => {
      throw [
         "Proximos passos",
         "Criar a interface com dados constantes (fixtures e mocks) e manter a barra verde.",
         "Substituir os dados constantes por variaveis (valores reais mockados) caminhando para a barra continuar verde.",
         "Revisar e remover duplicações e fazer melhorias pontuais no código.",
         "Analisar e planejar os proximos passos, criar as suites de testes e todos, rever o que foi aprendido e treinar comunicação para apresentar e explicar o que foi feito.",
         "publicar o código, fazer possiveis ajustes da codereview, verificar se a pipeline rodou, se o novo código foi publicado na homologação e atualizar/organizar os status das tarefas do jira.",
         "Iniciar pausa de 30 min para começar a proxima sessão de outra tarefa (virar a chavinha).",
      ];
   });

   it.todo("Deve renderizar os posts");

   describe("Post", () => {
      it.todo("Deve renderizar o link de voltar");

      it.todo("Deve renderizar a mensagem de Loading enquanto busca os dados.");

      it.todo("Deve renderizar a mensagem de Error quando ocorrer um erro na busca dos dados");

      it.todo("Deve mostrar as informações do post");

      it.todo("Deve mostrar a mensagem de Background Updating enquanto atualiza os dados.");
   });

   describe("Posts", () => {
      it.todo("Deve mostrar o titulo da seção");

      it.todo("Deve mostrar a mensgaem de Loading enquanto busca os dados.");

      it.todo("Deve mostrar a mensagem de Error quando ocorrer um erro na busca dos dados.");

      it.todo("Deve retornar a lista de posts corretamente");

      it.todo("Deve mostrar a mensagem de Background Updating enquanto atualiza os dados.");
   });
});
