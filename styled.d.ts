import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      bodyYellow: string;
      footerGreen: string;
      powderWhite: string;
      persianGreen: string;
      text: string;
      yellow: string;
      grey100: string;
      lightBrown: string;
      red: string;
      logoLightGreen: string;
      logoDarkGreen: string;
      mustard: string;
      lightGreen: string;
      titleGreen: string;
    };
    fontSizes: {
      xs: string;
      sm: string;
      md: string;
      large: string;
    };

    fontFamily: {
      primary: string;
      secondary: string;
    };
    weight: {
      thin: number;
      regular: number;
      medium: number;
      semiBold: number;
      bold: number;
    };
  }
}
