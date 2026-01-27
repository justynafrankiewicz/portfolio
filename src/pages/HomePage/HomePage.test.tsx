import { I18nextProvider } from "react-i18next";

import i18n from "@/i18n";
import { render, screen } from "@testing-library/react";

import { HomePage } from "./index";

const renderWithI18n = () =>
  render(
    <I18nextProvider i18n={i18n}>
      <HomePage />
    </I18nextProvider>
  );

describe("HomePage", () => {
  it("renders hero section", () => {
    renderWithI18n();

    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("renders About section", () => {
    renderWithI18n();

    expect(screen.getByRole("heading", { name: /about/i })).toBeInTheDocument();
  });
});
