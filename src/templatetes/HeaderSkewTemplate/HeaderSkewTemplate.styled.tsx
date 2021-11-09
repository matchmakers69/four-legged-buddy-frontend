import styled from "styled-components";
import { device } from "src/styles/breakpoints";

export const HeroSkewHeader = styled.div`
  margin-bottom: 8rem;
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.shapeColor};

  &:after {
    content: "";
    display: block;
    background-color: ${({ theme }) => theme.colors.shapeColor};
    top: 0;
    right: 0;
    left: 0;
    bottom: -8rem;
    z-index: -1;
    position: absolute;
    transform-origin: 0 100%;
    transform: skewY(-3deg);
  }
  @media ${device.tabletS} {
    min-height: 14rem;
    padding-top: 10rem;
  }
`;

export const InnerHeader = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 0 5rem;
  height: 100%;
`;

export const HeaderContent = styled.div`
  display: flex;
  width: 100%;
  max-width: 40rem;
  justify-content: flex-end;
  flex-direction: column;
  height: 100%;
`;
