import { GET } from "@/app/next-app-suspense-streaming/api/wait/route";
import { NextResponse } from "next/server";

jest.mock("next/server", () => ({
   NextResponse: {
      json: jest.fn(),
   },
}));

describe("next-app-suspense-streaming route handler wait", () => {
   beforeEach(() => {
      jest.clearAllMocks();
   });

   it("Dever retornar a mensagem correta de wait", async () => {
      const delay = 500;
      const mockRequest = {
         url: `http://localhost/api?${delay}=true`,
      } as Request;

      await GET(mockRequest);

      expect(NextResponse.json).toHaveBeenCalledWith({
         message: `waited ${delay}ms`,
      });
   });
});
