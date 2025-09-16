import clsx from "clsx";
import { useEffect, useRef, type TextareaHTMLAttributes } from "react";

interface AutoSizeTextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  value: string;
  color?: "primary" | "secondary" | "neutral";
  size?: "small" | "medium" | "large";
  maxRows?: number;
  className?: string;
}

const colorMap = {
  primary: "focus:border-primary focus:ring-primary",
  secondary: "focus:border-secondary focus:ring-secondary",
  neutral: "focus:border-gray-400 focus:ring-gray-400",
};

const sizeMap = {
  small: "p-2  w-1/3 text-sm leading-6", // leading-6 is 1.5rem
  medium: "p-3  w-1/2 text-base leading-normal", // leading-normal is 1.5
  large: "p-4 w-full text-lg leading-7", // leading-7 is 1.75rem
};

const sizeValueMap = {
  small: { lineHeight: 1.5, padding: 1 }, // py-2 -> 0.5rem * 2
  medium: { lineHeight: 1.5, padding: 1.5 }, // py-3 -> 0.75rem * 2
  large: { lineHeight: 1.75, padding: 2 }, // py-4 -> 1rem * 2
};

export default function AutoSizeTextArea({
  value,
  size = "medium",
  color = "neutral",
  maxRows = 15,
  className,
  ...props
}: AutoSizeTextAreaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [value]);

  const { lineHeight, padding } = sizeValueMap[size];
  const maxHeightStyle = {
    maxHeight: `calc(${maxRows * lineHeight}rem + ${padding}rem)`,
  };
  return (
    <textarea
      required
      ref={textareaRef}
      className={clsx(
        "leading resize-none overflow-auto rounded-lg border border-gray-300 bg-white text-gray-700 shadow-inner focus:ring-1 focus:outline-none",
        colorMap[color],
        sizeMap[size],
        className,
      )}
      style={maxHeightStyle}
      value={value}
      {...props}
    />
  );
}
