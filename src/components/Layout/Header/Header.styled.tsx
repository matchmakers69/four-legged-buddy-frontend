import styled from "styled-components";
import { device } from "src/styles/breakpoints";

export const Header = styled.header`
  width: 100%;
  background-color: transparent;

  @media ${device.tabletS} {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 100;
    pointer-events: none;
  }
`;

export const HeaderPage = styled.div`
  > div,
  a,
  nav {
    pointer-events: auto;
  }
  &.bcg-transparent {
    background-color: transparent;
    transition: all 0.3s 0.1s, transform 0ms, -webkit-transform 0ms;
  }
  &.header-navbar {
    display: flex;
    padding: 0 5rem;
    position: relative;
    align-items: center;
    height: 10rem;
  }
`;

export const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
`;
