import styled from "styled-components";
import { device } from "src/styles/breakpoints";

export const SectionHomeIntro = styled.div`
  overflow: hidden;
  padding: 6rem 0 8rem;
  min-height: 100vh;
  height: auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media ${device.mobileM} {
    padding-top: 12rem;
  }

  @media ${device.tabletS} {
    min-height: auto;
    height: 100vh;
  }

  &:before {
    width: 100%;
    content: "";
    display: block;
    bottom: 0;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-image: url("/media/svg/triangle-new.svg");
  }
`;

export const IntroTextWrapper = styled.div`
  position: relative;
  z-index: 1;
  @media ${device.tabletS} {
    max-width: 40rem;
    margin-bottom: 0;
  }

  @media ${device.laptopM} {
    max-width: 60rem;
  }
`;
