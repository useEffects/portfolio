import { ThemeProvider } from "@/context/mui";
import "./tailwind.css";
import "./global.css"
import { DarkModeProvider } from "@/context/darkmode";
import { CatppuccinProvider } from "@/context/catppuccin";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" id="__next">
      <body>
        <DarkModeProvider>
          <ThemeProvider>
            <CatppuccinProvider>{children}</CatppuccinProvider>
          </ThemeProvider>
        </DarkModeProvider>
      </body>
    </html>
  );
}