import { useTranslation } from "react-i18next";

import { NavButtonLink } from "@/components/UI/NavButtonLink";

import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-50 bg-base text-base px-8 py-5 flex justify-between items-center border-b border-gray-300 dark:border-gray-700 shadow-sm">
      <a
        href="#home"
        className="
    text-2xl md:text-3xl
    font-bold
    tracking-wide
    hover:opacity-80
    transition
  "
      >
        Portfolio
      </a>

      <nav className="flex items-center space-x-4 md:space-x-6">
        <NavButtonLink href="#about">{t("about.title")}</NavButtonLink>
        <NavButtonLink href="#experience">
          {t("experience.title")}
        </NavButtonLink>
        <NavButtonLink href="#contact">{t("contact.title")}</NavButtonLink>

        <div className="flex items-center space-x-3 ml-4">
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
};
