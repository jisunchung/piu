import { createContext, useContext, type RefObject } from "react";

interface ScrollContextType {
  scrollRef: RefObject<HTMLDivElement | null>;
}

export const ScrollContext = createContext<ScrollContextType | null>(null);

export function useScrollContext() {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error(
      "useScrollContext must be used within a ScrollContext.Provider",
    );
  }
  return context;
}
