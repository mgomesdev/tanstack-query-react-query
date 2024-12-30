import { render, screen } from "@testing-library/react";
import Page from "@/app/next-app-suspense-streaming/page";

describe("Page", () => {
   it("Deve renderizar o texto", () => {
      render(<Page />);

      expect(screen.getByText("Next App Suspense Streaming")).toBeInTheDocument();
   });
});
