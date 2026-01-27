import type { AnchorHTMLAttributes } from "react";
import clsx from "clsx";

type Variant = "primary" | "secondary";

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
}

export const ButtonLink = ({
  variant = "primary",
  className,
  ...props
}: ButtonLinkProps) => {
  return (
    <a
      {...props}
      className={clsx(
        "inline-flex items-center justify-center px-7 py-3 rounded-xl font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 dark:focus:ring-gray-600",
        variant === "primary" && "bg-primary text-white hover:opacity-90",
        variant === "secondary" &&
          "border border-gray-300 dark:border-gray-600 text-base hover:bg-gray-100 dark:hover:bg-gray-800",
        className
      )}
    />
  );
};
