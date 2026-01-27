import { useTranslation } from "react-i18next";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

const languages = [
  { code: "pl", label: "PL", flag: "🇵🇱" },
  { code: "en", label: "EN", flag: "🇬🇧" },
];

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLang =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        className="
          flex items-center space-x-1
          text-gray-800 dark:text-gray-200
          hover:text-primary dark:hover:text-primary
          text-sm md:text-base
          px-2 py-1
          transition
          rounded
        "
      >
        <span>{currentLang.flag}</span>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className="bg-base dark:bg-gray-800 rounded shadow-md py-1">
        {languages.map((lang) => (
          <DropdownMenu.Item
            key={lang.code}
            className="
              px-4 py-2
              hover:text-primary dark:hover:text-primary
              cursor-pointer
              flex items-center space-x-2
              text-sm
            "
            onClick={() => i18n.changeLanguage(lang.code)}
          >
            <span>{lang.flag}</span>
            <span>{lang.label}</span>
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
