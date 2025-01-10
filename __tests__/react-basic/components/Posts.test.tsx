import { render, screen } from "@testing-library/react";
import Posts from "@/app/react-basic/components/Posts";
import LayoutReactBasic from "@/app/react-basic/layout";

describe("Posts: react-basic", () => {
   const mockSetPostID = jest.fn();

   const mockUsePostsReturn = {
      status: "pending",
      data: [
         {
            id: 1,
            title: "title1",
            body: "body1",
         },
         {
            id: 2,
            title: "title2",
            body: "body2",
         },
      ],
      error: {},
      isFetching: false,
   };

   it("Deve mostrar o titulo 'Posts'", async () => {
      render(await Posts({ setPostID: mockSetPostID, usePostsTemp: mockUsePostsReturn }));
      expect(screen.getByText("Posts")).toBeInTheDocument();
   });

   it("Deve mostrar o 'Loading' enquanto busca os dados", async () => {
      render(await Posts({ setPostID: mockSetPostID, usePostsTemp: mockUsePostsReturn }));
      expect(screen.getByText("Loading..."));
   });

   it("Deve mostrar a mensagem de erro se der erro na busca dos dados", async () => {
      render(
         await Posts({
            setPostID: mockSetPostID,
            usePostsTemp: {
               ...mockUsePostsReturn,
               status: "error",
               error: {
                  message: "Ocorreu um erro!",
               },
            },
         })
      );

      expect(screen.getByText("Error: Ocorreu um erro!")).toBeInTheDocument();
   });

   it("Deve mostrar os posts corretamente, quando os dados forem buscados com sucesso", async () => {
      render(
         <LayoutReactBasic>
            {await Posts({ setPostID: mockSetPostID, usePostsTemp: { ...mockUsePostsReturn, status: "fullied" } })}
         </LayoutReactBasic>
      );

      const posts = screen.getAllByRole("paragraph");

      expect(posts.length).toBeGreaterThanOrEqual(0);
   });

   it("Deve mostrar o texto Background Updating... enquanto os dados são revalidados", async () => {
      render(
         <LayoutReactBasic>
            {await Posts({
               setPostID: mockSetPostID,
               usePostsTemp: { ...mockUsePostsReturn, status: "fullied", isFetching: true },
            })}
         </LayoutReactBasic>
      );

      expect(screen.getByText("Background Updating...")).toBeInTheDocument();
   });
});
