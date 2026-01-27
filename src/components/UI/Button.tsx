import clsx from "clsx";

import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export const Button = ({
  variant = "primary",
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        "px-7 py-3 rounded-xl font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 dark:focus:ring-gray-600",
        variant === "primary" && "bg-primary text-white hover:opacity-90",
        variant === "secondary" &&
          "border border-gray-300 dark:border-gray-600 text-base hover:bg-gray-100 dark:hover:bg-gray-800",
        className
      )}
    />
  );
};
