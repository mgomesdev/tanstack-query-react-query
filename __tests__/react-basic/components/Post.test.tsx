import Post from "@/app/react-basic/components/Post";
import usePost from "@/app/react-basic/hooks/usePost";
import { fireEvent, render, screen } from "@testing-library/react";

jest.mock("../../../src/app/react-basic/hooks/usePost");

describe("Post", () => {
   const mockUsePostResponse = {
      status: "fullied",
      data: {
         userId: 7,
         title: "title",
         body: "body",
      },
      error: {},
      isFetching: false,
   };

   const mockSetPostID = jest.fn();

   it("Deve renderizar o link de voltar corretamente", () => {
      (usePost as jest.Mock).mockReturnValueOnce(mockUsePostResponse);

      render(<Post postID={7} setPostID={mockSetPostID} />);

      const link = screen.getByRole("link");

      fireEvent.click(link);

      expect(link).toHaveAttribute("href", "#");
      expect(link).toHaveTextContent("Back");
      expect(mockSetPostID).toHaveBeenCalledWith(-1);
   });

   it("Deve renderizar a mensagem de Loading enquanto busca os dados.", () => {
      (usePost as jest.Mock).mockReturnValueOnce({ ...mockUsePostResponse, status: "pending" });

      render(<Post postID={7} setPostID={mockSetPostID} />);

      expect(screen.getByText("Loading...")).toBeInTheDocument();
   });

   it("Deve renderizar a mensagem de Error quando ocorrer um erro na busca dos dados", () => {
      (usePost as jest.Mock).mockReturnValueOnce({
         ...mockUsePostResponse,
         status: "error",
         error: { message: "ocorreu um erro!" },
      });

      render(<Post postID={7} setPostID={mockSetPostID} />);

      expect(screen.getByText("Error: ocorreu um erro!"));
   });

   it("Deve mostrar as informações do post", () => {
      (usePost as jest.Mock).mockReturnValueOnce({ ...mockUsePostResponse, status: "fullied" });

      render(<Post postID={7} setPostID={mockSetPostID} />);

      expect(screen.getByRole("heading")).toBeInTheDocument();
      expect(screen.getByRole("heading")).toHaveTextContent(mockUsePostResponse.data.title);
      expect(screen.getByRole("paragraph")).toBeInTheDocument();
      expect(screen.getByRole("paragraph")).toHaveTextContent(mockUsePostResponse.data.body);
   });

   it("Deve mostrar a mensagem de Background Updating enquanto atualiza os dados.", () => {
      (usePost as jest.Mock).mockReturnValueOnce({ ...mockUsePostResponse, status: "fullied", isFetching: true });

      render(<Post postID={7} setPostID={mockSetPostID} />);

      expect(screen.getByText("Background Updating...")).toBeInTheDocument();
   });
});
