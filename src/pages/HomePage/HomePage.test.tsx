import { render, screen } from "@testing-library/react";

import { HomePage } from "./index";

describe("HomePage", () => {
  it("renders hero section", () => {
    render(<HomePage />);
    expect(screen.getByText(/Hello, I'm Justyna/i)).toBeInTheDocument();
  });

  it("renders About section", () => {
    render(<HomePage />);
    expect(screen.getByText(/About Me/i)).toBeInTheDocument();
  });
});
