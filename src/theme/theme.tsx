import baseStyled, { ThemedStyledInterface, DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  title: "theme",
  colors: {
    bodyYellow: "#ebedd5",
    footerGreen: "#18280b",
    powderWhite: "#ffffff",
    persianGreen: "#daee73",
    lightBlue: "#7bbfcc",
    onyx: "#040809",
    text: "#010000",
    yellow: "#ead96d",
    orange: "#db613a",
    grey100: "#e8e8e0",
    lightBrown: "#ecdcc2",
    red: "#c0362b",
    violet: "#e8a7fb",
  },

  fontSizes: {
    xs: "1.4rem",
    sm: "1.6rem",
    md: "2rem",
    large: "3rem",
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
