import styled, { css } from "styled-components";
import { device } from "src/styles/breakpoints";

type HeaderProps = {
  isHeaderSkew: boolean;
};

const SharedStyles = css`
  position: absolute;
  display: block;
  content: "";
  width: 100%;
`;

export const Header = styled.header<HeaderProps>`
  width: 100%;
  background-color: ${({ theme, isHeaderSkew }) => (isHeaderSkew ? theme.colors.shapeColor : theme.colors.transparent)};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  pointer-events: none;

  &.header-page {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5rem;
    margin-bottom: 8rem;
    min-height: 7rem;
    width: 100%;
    left: 0;
    top: 0;
    background-color: ${({ theme }) => theme.colors.shapeColor};
    &:after {
      background-repeat: no-repeat;
      background-size: 100% 100%;
      background-image: url("/media/svg/skew-shape.svg");
      background-position: center center;
      height: 5vw;
      bottom: -5vw;
      ${SharedStyles};
      z-index: 2;
      left: 0;
    }
  }
`;

export const HeaderNav = styled.div`
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
    flex-wrap: wrap;
    justify-content: space-between;
  }

  &.header-navbar-skew {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 2.5rem 0 2rem 0;
    margin-left: auto;
  }
`;

export const HeaderTitle = styled.div`
  padding: 0 5rem;
  margin-top: 1.5rem;
`;

export const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
`;

export const LogoSkewHeaderwrapper = styled.div`
  position: absolute;
  left: 5rem;
  top: 4rem;
  z-index: 10;
  width: 11rem;
  height: 6rem;
`;

export const LogoHeaderwrapper = styled.div`
  width: 11rem;
  height: 6rem;
`;

export const LogoSkewHeaderwrapperInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
