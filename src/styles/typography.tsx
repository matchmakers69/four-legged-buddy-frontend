import { Typography } from "@material-ui/core";
import styled from "styled-components";
import { device } from "./breakpoints";

const H1 = styled(({ ...rest }) => <Typography variant="h1" component="h1" {...rest} />)`
  &.h1 {
    font-size: 4.8rem;
    font-size: 8vmin;
    line-height: 1.25;
    color: ${({ theme }) => theme.colors.titleGreen};
    @media ${device.mobileM} {
      font-size: 4.8rem;
    }
    @media ${device.laptopM} {
      font-size: 4.8rem;
    }
  }

  .title-paragraph {
    display: block;
    line-height: 1;
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
  &.m-15-bottom {
    margin-bottom: 1.5rem;
  }
`;

export { H1, Paragraph };
