import { usePost } from "@/app/react-basic/hooks/usePost";

jest.mock("../../../src/app/react-basic/hooks/usePost");

describe("usePost: react-basic", () => {
   const mockUsePostResponse = {
      status: "pending",
      data: {
         title: "title",
         body: "body",
      },
      error: {},
      isFetching: false,
   };

   it("Deve retornar o status pending enquanto busca os dados", () => {
      (usePost as jest.Mock).mockReturnValue(mockUsePostResponse);

      const { status } = usePost(7);

      expect(status).toBe("pending");
   });

   it("Deve retornar a mensagem de erro quando o status for igual a error", () => {
      (usePost as jest.Mock).mockReturnValueOnce({
         ...mockUsePostResponse,
         status: "error",
         error: "Ocorreu um erro!",
      });

      const { error } = usePost(7);

      expect(error).toBe("Ocorreu um erro!");
   });

   it.todo("Deve retornar os dados quando o status for igual a fullied");
});
