import type { ReactNode } from "react";

interface FlexProps {
  align?: "start" | "center" | "end" | "baseline" | "stretch";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  direction?: "row" | "col" | "row-reverse" | "col-reverse";
  children?: ReactNode;
  className?: string;
}

export default function Flex({
  align,
  justify,
  direction = "row",
  children,
  className = "",
}: FlexProps) {
  return (
    <div
      className={`flex flex-${direction} ${align ? `items-${align}` : ""} ${
        justify ? `justify-${justify}` : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
