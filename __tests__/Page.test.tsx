import { render, screen } from "@testing-library/react";
import Home from "../src/app/page";

describe("Page", () => {
   it("Deve renderizar a página", () => {
      render(<Home />);

      const title = screen.getByText("Home");

      expect(title).toBeInTheDocument;
   });
});
