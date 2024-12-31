import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";

import Page from "../src/app/page";

describe("Home", () => {
   describe("Deve configurar os links de navegação corretamente", () => {
      it("Next Prefetching Link", () => {
         render(<Page />);

         const nextPrefetchingLink = screen.getByTestId("next-app-with-prefetching-link");

         expect(nextPrefetchingLink).toBeInTheDocument();
         expect(nextPrefetchingLink).toHaveTextContent("Next App With Prefetching");
         expect(nextPrefetchingLink).toHaveAttribute("href", "/next-app-with-prefetching");
      });

      it("Next App Suspense Streaming Link", () => {
         render(<Page />);

         const nextSuspenseStreamingLink = screen.getByTestId("next-app-suspense-streaming-link");

         expect(nextSuspenseStreamingLink).toBeInTheDocument();
         expect(nextSuspenseStreamingLink).toHaveTextContent("Next App Suspense Streaming");
         expect(nextSuspenseStreamingLink).toHaveAttribute("href", "/next-app-suspense-streaming");
      });
   });
});
