import { CatppuccinProvider } from "@/context/catppuccin";
import { ThemeProvider } from "@/context/theme";
import "./global.css";
import "./tailwind.css";
import { MyMuiThemeProvider } from "@/context/mui";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" id="__next">
      <body>
        <ThemeProvider>
          <MyMuiThemeProvider>
            <CatppuccinProvider>
              <div className="h-full w-full relative">
                <div className="bg-image"></div>
                {children}
              </div>
            </CatppuccinProvider>
          </MyMuiThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}