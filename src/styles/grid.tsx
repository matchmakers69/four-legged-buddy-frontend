import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import { device } from "src/styles/breakpoints";

export const ContainerNarrow = styled.div`
  width: 100%;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  margin-right: auto;
  margin-left: auto;

  @media ${device.tabletS} {
    max-width: 720px;
  }

  @media ${device.tablet} {
    max-width: 930px;
  }

  @media ${device.laptopL} {
    max-width: 1024px;
  }

  @media ${device.desktop} {
    max-width: 1400px;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 3rem 5vw;
  width: 100%;

  @media ${device.tabletS} {
    padding: 5rem;
  }

  &.container-1 {
    max-width: 1380px;
  }
`;

export const Row = styled(({ ...rest }) => <Grid container {...rest} />)`
  &.row {
    width: calc(100% + 3rem);
    margin: 0 -1.5rem;
  }
`;

export const Col = styled(({ ...rest }) => <Grid item {...rest} />)`
  padding: 0 1.5rem;
  &.flex {
    display: flex;
  }
  &.order-1 {
    order: 2;
    @media ${device.tablet} {
      order: 1;
    }
  }

  &.order-2 {
    order: 1;
    @media ${device.tablet} {
      order: 2;
    }
  }
`;
