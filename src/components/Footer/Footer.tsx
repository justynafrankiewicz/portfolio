import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-base text-gray p-6 text-center border-t border-gray-300 dark:border-gray-700">
      &copy; 2026 Justyna Frankiewicz. {t("footer.rights")}
    </footer>
  );
};
