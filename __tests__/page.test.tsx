import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";

import Page from "../src/app/page";

describe("Home", () => {
   describe("Deve configurar os links de navegação corretamente", () => {
      beforeEach(() => {
         render(<Page />);
      });

      it("Next Prefetching Link", () => {
         const nextPrefetchingLink = screen.getByTestId("next-app-with-prefetching-link");

         expect(nextPrefetchingLink).toBeInTheDocument();
         expect(nextPrefetchingLink).toHaveTextContent("Next App With Prefetching");
         expect(nextPrefetchingLink).toHaveAttribute("href", "/next-app-with-prefetching");
      });

      it("Next App Suspense Streaming Link", () => {
         const nextSuspenseStreamingLink = screen.getByTestId("next-app-suspense-streaming-link");

         expect(nextSuspenseStreamingLink).toBeInTheDocument();
         expect(nextSuspenseStreamingLink).toHaveTextContent("Next App Suspense Streaming");
         expect(nextSuspenseStreamingLink).toHaveAttribute("href", "/next-app-suspense-streaming");
      });

      it("React Simple Link", () => {
         const reactSimpleLink = screen.getByTestId("react-simple");

         expect(reactSimpleLink).toBeInTheDocument();
         expect(reactSimpleLink).toHaveTextContent("React Simple");
         expect(reactSimpleLink).toHaveAttribute("href", "/react-simple");
      });
   });
});
