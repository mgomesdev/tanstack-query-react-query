import { metadata } from "@/app/react-basic/layout";
import { Metadata } from "next";

jest.mock("next", () => ({ Metadata: jest.fn() }));

describe("react-basic: Layout", () => {
   it("Deve configurar o metadata corretamente.", () => {
      const mockMetadata: Metadata = {
         title: "React Basic",
         description: "React Example: Basic",
      };

      expect(metadata).toEqual(mockMetadata);
   });

   it.todo("Deve instanciar o Provider do ReactQuery passando um children");
});
