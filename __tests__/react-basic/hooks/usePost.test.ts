import { usePost } from "@/app/react-basic/hooks/usePost";

jest.mock("../../../src/app/react-basic/hooks/usePost");

describe("usePost: react-basic", () => {
   it("Deve retornar o status pending enquanto busca os dados", () => {
      (usePost as jest.Mock).mockReturnValue({
         status: "pending",
         data: {
            title: "title",
            body: "body",
         },
         error: {},
         isFetching: false,
      });

      const { status } = usePost(7);
      expect(status).toBe("pending");
   });

   it.todo("Deve retornar a mensagem de erro quando o status for igual a error");

   it.todo("Deve retornar os dados quando o status for igual a fullied");
});
