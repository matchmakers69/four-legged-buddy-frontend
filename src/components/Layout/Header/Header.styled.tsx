import styled from "styled-components";
import { device } from "src/styles/breakpoints";

export const Header = styled.header`
  width: 100%;
  height: auto;
  min-width: 5rem;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${device.tabletS} {
    height: 7rem;
    top: 0;
    left: 0;
    position: fixed;
    z-index: 10;
  }
`;

export const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
`;
