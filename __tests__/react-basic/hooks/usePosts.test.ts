import usePosts from "@/app/react-basic/hooks/usePosts";

jest.mock("../../../src/app/react-basic/hooks/usePosts");

describe("usePosts", () => {
   it("Deve retornar os posts", () => {
      const mockPosts = [
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
      ];

      (usePosts as jest.Mock).mockReturnValue({
         status: "fulfilled",
         data: mockPosts,
         error: {},
         isFetching: false,
      });
      const posts = usePosts();

      expect(posts.data).toEqual(mockPosts);
   });
});
