import { createGlobalStyle } from "styled-components";
import { Theme } from "../theme/theme";

interface IGlobalProps {
  theme: Theme;
}

export const GlobalStyle = createGlobalStyle<IGlobalProps>`
 *, *::before, *::after {
    box-sizing: border-box;
  }
 html {
    font-size: 62.5%;
  }
  
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
    line-height: 1.6;
    font: 400 1.6rem 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${({ theme }) => theme.colors.bodyColor};
    color: ${({ theme }) => theme.colors.text};
    
    &.body-with-background {
      background-repeat: no-repeat;
      background-size: auto 100%;
      background-image: url("/media/svg/paws-shape.svg");
      background-position: 100% center;
    }
  }
  a {
    text-decoration: none;
  }

  p {
    font: 400 1.6rem 'Roboto Slab', sans-serif;
    padding: 0;
    margin:0;
  }


  figure {
    display: block;
    padding: 0;
    margin:0;
  }

  ul, ol {
    padding: 0;
    margin:0;
    list-style: none;
  }

  .bold {
    font-weight: ${({ theme }) => theme.weight.bold};
  }

  #nprogress .bar {
  height:3px;
}

#nprogress .bar {
  background: ${({ theme }) => theme.colors.titleGreen};
}

#nprogress .spinner-icon {
  border-top-color: blue;
  border-left-color: blue;
}
`;
