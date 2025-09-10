import clsx from "clsx";

import type { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  className?: string;
  disabled?: boolean;
  children?: ReactNode;
}

const colorMap = {
  primary: "bg-stone-50 text-blue-300 hover:bg-blue-300 hover:text-white",
  secondary: "bg-gray-200 text-gray-800 hover:bg-gray-600 hover:text-white",
};

const sizeMap = {
  small: "px-4 py-2 text-sm",
  medium: "px-6 py-3 text-base",
  large: "px-8 py-4 text-lg",
};

export default function Button({
  color = "primary",
  size = "medium",
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className={clsx(
        "rounded-full font-semibold shadow-lg transition",
        disabled && "cursor-not-allowed opacity-50",
        !disabled && "cursor-pointer",
        colorMap[color],
        sizeMap[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
