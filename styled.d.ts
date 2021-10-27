import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      bodyYellow: string;
      footerGreen: string;
      powderWhite: string;
      persianGreen: string;
      lightBlue: string;
      onyx: string;
      text: string;
      yellow: string;
      orange: string;
      grey100: string;
      lightBrown: string;
      red: string;
      violet: string;
    };
    fontSizes: {
      xs: string;
      sm: string;
      md: string;
      large: string;
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
