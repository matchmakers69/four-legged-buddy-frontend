import { Typography } from "@material-ui/core";
import styled from "styled-components";
import { device } from "./breakpoints";

const H1 = styled(({ ...rest }) => <Typography variant="h1" component="h1" {...rest} />)`
  &.h1 {
    font-size: 2.8rem;
    line-height: 1.25;
    color: ${({ theme }) => theme.colors.titleGreen};
    font-family: ${({ theme }) => theme.fontFamily.primary};
    @media ${device.mobileM} {
      font-size: 8vmin;
    }
  }

  .title-paragraph {
    display: block;
    line-height: 1.25;
  }

  &.bold {
    font-weight: ${({ theme }) => theme.weight.bold};
  }
  &.m-15-top {
    margin-top: 1.5rem;
  }

  &.m-30-bottom {
    margin-bottom: 3rem;
  }
`;

const H2 = styled(({ ...rest }) => <Typography variant="h2" component="h2" {...rest} />)`
  &.h2 {
    font-size: 2.4rem;
    line-height: 1.25;
    color: ${({ theme }) => theme.colors.titleGreen};
    @media ${device.mobileM} {
      font-size: 4.8rem;
    }
    @media ${device.laptopM} {
      font-size: 3rem;
    }
  }

  &.grid-item-title {
    font-size: 2rem;
    .title-label {
      display: inline-block;
      font-weight: ${({ theme }) => theme.weight.bold};
      color: inherit;
      font-size: inherit;
      margin-right: 1rem;
    }
    .title {
      display: inline-block;
    }
  }

  &.bold {
    font-weight: ${({ theme }) => theme.weight.bold};
  }
  &.m-15-top {
    margin-top: 1.5rem;
  }

  &.m-30-bottom {
    margin-bottom: 3rem;
  }
`;

const H3 = styled(({ ...rest }) => <Typography variant="h3" component="h3" {...rest} />)`
  &.h3 {
    font-size: 1.6rem;
    line-height: 1.25;
    color: ${({ theme }) => theme.colors.titleGreen};

    @media ${device.laptopM} {
      font-size: 1.8rem;
    }
  }

  &.bold {
    font-weight: ${({ theme }) => theme.weight.bold};
  }
`;

const H4 = styled(({ ...rest }) => <Typography variant="h4" component="h4" {...rest} />)`
  &.h4 {
    font-size: 1.4rem;
    line-height: 1.25;
    color: ${({ theme }) => theme.colors.titleGreen};

    @media ${device.laptopM} {
      font-size: 1.6rem;
    }
  }

  &.bold {
    font-weight: ${({ theme }) => theme.weight.bold};
  }
`;

const Paragraph = styled(({ ...rest }) => <Typography component="p" {...rest} />)`
  &.p {
    font: 400 1.6rem "Roboto Slab", sans-serif;
    line-height: 1.8;
  }
  &.bold {
    font-weight: ${({ theme }) => theme.weight.bold};
  }

  &.m-15-top {
    margin-top: 1.5rem;
  }

  &.m-30-bottom {
    margin-bottom: 3rem;
  }
`;

export { H1, Paragraph, H2, H3, H4 };
