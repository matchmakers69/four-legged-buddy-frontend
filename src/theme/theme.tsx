import baseStyled, { ThemedStyledInterface, DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  title: "theme",
  colors: {
    bodyYellow: "#eae2c1",
    footerGreen: "#18280b",
    powderWhite: "#ffffff",
    persianGreen: "#daee73",
    text: "#010000",
    yellow: "#ead96d",
    grey100: "#e8e8e0",
    lightBrown: "#ecdcc2",
    red: "#c0362b",
    logoLightGreen: "#739c3e",
    logoDarkGreen: "#1c2e0d",
    mustard: "#bb8918",
    lightGreen: "#e5daac",
    titleGreen: "#2b331f",
    lightBlue: "#2193a2",
  },

  fontSizes: {
    xs: "1.4rem",
    sm: "1.6rem",
    md: "2rem",
    large: "3rem",
  },
  fontFamily: {
    primary: "Cabin",
    secondary: "Roboto Slab",
  },
  weight: {
    thin: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
};
export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
