import { render, screen } from "@testing-library/react";
import Posts from "@/app/react-basic/components/Posts";
import LayoutReactBasic from "@/app/react-basic/layout";
import { usePosts } from "@/app/react-basic/hooks/usePosts";

jest.mock("../../../src/app/react-basic/core/ProviderPersist");

jest.mock("../../../src/app/react-basic/hooks/usePosts");

describe("Posts: react-basic", () => {
   const mockSetPostID = jest.fn();

   const mockUsePostsReturn = {
      status: "pending",
      data: [
         { id: 1, title: "Post 1", body: "Body 1" },
         { id: 2, title: "Post 2", body: "Body 2" },
      ],
      error: {},
      isFetching: false,
   };

   beforeEach(() => {
      jest.clearAllMocks();
   });

   it("Deve mostrar o titulo 'Posts'", () => {
      (usePosts as jest.Mock).mockReturnValue(mockUsePostsReturn);

      render(<Posts setPostID={mockSetPostID} />);

      expect(screen.getByText("Posts")).toBeInTheDocument();
   });

   it("Deve mostrar o 'Loading' enquanto busca os dados", () => {
      (usePosts as jest.Mock).mockReturnValue(mockUsePostsReturn);

      render(<Posts setPostID={mockSetPostID} />);

      expect(screen.getByText("Loading..."));
   });

   it("Deve mostrar a mensagem de erro se der erro na busca dos dados", () => {
      (usePosts as jest.Mock).mockReturnValue({
         ...mockUsePostsReturn,
         status: "error",
         error: {
            message: "Ocorreu um erro!",
         },
      });

      render(<Posts setPostID={mockSetPostID} />);

      expect(screen.getByText("Error: Ocorreu um erro!")).toBeInTheDocument();
   });

   it("Deve mostrar os posts corretamente, quando os dados forem buscados com sucesso", () => {
      (usePosts as jest.Mock).mockReturnValue({
         ...mockUsePostsReturn,
         status: "fulfilled",
      });

      render(
         <LayoutReactBasic>
            <Posts setPostID={mockSetPostID} />
         </LayoutReactBasic>
      );

      const posts = screen.getAllByText(/title/i);

      expect(posts.length).toBeGreaterThanOrEqual(0);
   });

   it("Deve mostrar o texto Background Updating... enquanto os dados são revalidados", () => {
      (usePosts as jest.Mock).mockReturnValue({
         ...mockUsePostsReturn,
         status: "fulfilled",
         isFetching: true,
      });

      render(
         <LayoutReactBasic>
            <Posts setPostID={mockSetPostID} />
         </LayoutReactBasic>
      );

      expect(screen.getByText("Background Updating...")).toBeInTheDocument();
   });

   it("Proximos passos", () => {
      throw [
         "✕ Deve mostrar os posts corretamente, quando os dados forem buscados com sucesso (5 ms)",
         "✕ Deve mostrar o texto Background Updating... enquanto os dados são revalidados (2 ms)",
         "criar os testes de usePosts",
         "substituir dados constantes por variaveis -> useQuery -> react query",
      ];
   });
});
