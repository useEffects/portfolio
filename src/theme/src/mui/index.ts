import { Shadows, Theme, ThemeOptions, createTheme } from "@mui/material/styles";
import colorsea from "colorsea";
import { catppuccinColors } from "..";
import { colorThemes, themes } from "../tailwind";

export const generateThemeConfig = (theme: typeof themes[number]): Theme => {
  const [themeMode, primaryColor] = theme.split("-") as ["dark" | "light", typeof colorThemes[number]]
  const secondaryColor = "overlay0"
  const commonConfigs: ThemeOptions = {
    shadows: new Array(25).fill("none") as Shadows,
    shape: {
      borderRadius: 0,
    },
    typography: {
      button: {
        textTransform: "none",
      },
    }
  };

  const primaryPalette = catppuccinColors[themeMode][primaryColor];
  const secondaryPalette = catppuccinColors[themeMode][secondaryColor];

  return createTheme({
    ...commonConfigs,
    palette: {
      mode: themeMode,
      primary: {
        light: colorsea(primaryPalette).lighten(5).hex(),
        main: primaryPalette,
        dark: colorsea(primaryPalette).darken(5).hex(),
      },
      secondary: {
        light: colorsea(secondaryPalette).lighten(5).hex(),
        main: secondaryPalette,
        dark: colorsea(secondaryPalette).darken(5).hex(),
      },
      background: {
        default: catppuccinColors[themeMode].base,
        paper: catppuccinColors[themeMode].mantle,
      },
      text: {
        primary: catppuccinColors[themeMode].text,
        secondary: catppuccinColors[themeMode].subtext0,
      },
    },
  });
};
