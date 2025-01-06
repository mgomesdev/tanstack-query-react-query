import { Metadata } from "next";
import { metadata } from "../../src/app/react-simple/layout";

describe("Layout", () => {
   it("Deve configurar o metadata", () => {
      const mockMetadata: Metadata = {
         title: "React Simple",
         description: "React Example: Simple",
      };

      expect(mockMetadata).toEqual(metadata);
   });

   it.todo("O Layout deve possuir um children");
});
