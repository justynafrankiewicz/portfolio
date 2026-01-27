import type { ReactNode } from "react";

interface NavButtonLinkProps {
  href: string;
  children: ReactNode;
}

export const NavButtonLink = ({ href, children }: NavButtonLinkProps) => {
  return (
    <a
      href={href}
      className="
        px-2 py-1
        text-base md:text-lg
        font-medium
        text-gray-800 dark:text-gray-200
        hover:text-primary dark:hover:text-primary
        transition
        rounded
      "
    >
      {children}
    </a>
  );
};
