import { fireEvent, render, screen } from "@testing-library/react";

import { ThemeSwitcher } from "./ThemeSwitcher";

test("toggles dark mode on click", () => {
  render(<ThemeSwitcher />);
  const button = screen.getByRole("button");

  fireEvent.click(button);
  expect(document.documentElement.classList.contains("dark")).toBe(true);
});
