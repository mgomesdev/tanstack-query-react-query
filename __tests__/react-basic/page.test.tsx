import LayoutReactBasic from "@/app/react-basic/layout";
import PageReactBasic from "@/app/react-basic/page";
import { render, screen, waitFor } from "@testing-library/react";
import React from "react";

describe("react-basic: Page", () => {
   beforeEach(() => jest.clearAllMocks());

   describe("Deve renderizar o page corretamente", () => {
      it("Deve renderizar os paragrafos", () => {
         render(
            <LayoutReactBasic>
               <PageReactBasic />
            </LayoutReactBasic>
         );

         waitFor(() => {
            expect(
               screen.getByText(/As you visit the posts below, you will notice them in a loading state/)
            ).toBeInTheDocument();

            expect(
               screen.getByText(/(You may need to throttle your network speed to simulate longer loading sequences)/)
            );
         });
      });

      it("Deve renderizar os Posts caso o postID seja -1", () => {
         render(
            <LayoutReactBasic>
               <PageReactBasic />
            </LayoutReactBasic>
         );

         waitFor(() => {
            expect(screen.getByTestId("posts-list")).toBeInTheDocument();
         });
      });

      it("Deve renderizar o Post caso o postID seja maior que -1", () => {
         jest.spyOn(React, "useState").mockImplementationOnce(() => [1, jest.fn()]);

         render(
            <LayoutReactBasic>
               <PageReactBasic />
            </LayoutReactBasic>
         );

         waitFor(() => {
            expect(screen.getByTestId("posts-list")).toBeInTheDocument();
         });
      });
   });
});
