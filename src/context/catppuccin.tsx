"use client";

import { catppuccinColors, catppuccinThemes } from "@/components/theme";
import { ReactNode, createContext, useContext, useMemo } from "react";
import { ThemeContext } from "./theme";

export const CatppuccinContext = createContext(catppuccinThemes["dark-mauve"]);
export function CatppuccinProvider({ children }: { children: ReactNode }) {
    const { theme } = useContext(ThemeContext);
    const catppuccinColor = useMemo(() => catppuccinThemes[theme], [theme]);
    return <CatppuccinContext.Provider value={catppuccinColor}>{children}</CatppuccinContext.Provider>;
}