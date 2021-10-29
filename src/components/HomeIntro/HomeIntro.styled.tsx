import styled from "styled-components";
import { device } from "src/styles/breakpoints";

export const SectionHomeIntro = styled.div`
  overflow: hidden;
  padding: 6rem 0 8rem;
  position: relative;

  &:before {
    background-color: ${({ theme }) => theme.colors.shapeColor};
    width: 100%;
    content: "";
    display: block;
    bottom: 40%;
    height: 130%;
    left: 0;
    position: absolute;
    top: 100%;
    transform-origin: right center;
    transform: skewY(30deg);

    @media ${device.mobileM} {
      bottom: 0;
    }
  }

  @media ${device.mobileM} {
    padding-top: 12rem;
  }

  @media ${device.tabletS} {
    display: flex;
    height: 100vh;
    max-height: 135vmin;
    min-height: 650px;
    text-align: left;
    align-items: center;
  }
`;

export const IntroTextWrapper = styled.div`
  position: relative;
  z-index: 1;
  @media ${device.tabletS} {
    max-width: 30rem;
    margin-bottom: 10vh;
  }
  @media ${device.laptop} {
    max-width: 60rem;
  }

  @media ${device.laptopM} {
    max-width: 60rem;
  }
`;
