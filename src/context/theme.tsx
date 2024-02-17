"use client";

import { ReactNode, createContext, useEffect, useState } from "react";
import { colorThemes, themes } from "../../theme/src";

export const ThemeContext = createContext({
    theme: "dark-mauve" as typeof themes[number],
    toggleTheme: (mode: "light" | "dark", color: typeof colorThemes[number]) => { },
});

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<typeof themes[number]>("dark-mauve");

    useEffect(() => {
        document.querySelector("body")?.setAttribute("data-theme", theme)
    }, [theme])
    return <ThemeContext.Provider value={{
        theme, toggleTheme: (mode: "dark" | "light", color: typeof colorThemes[number]) => {
            const validTheme = `${mode}-${String(color)}` as typeof theme;
            setTheme(validTheme);
        }
    }}>{children}</ThemeContext.Provider>;

}