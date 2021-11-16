import styled from "styled-components";

export const NavContainer = styled.nav`
  align-items: center;
  justify-content: flex-end;
  padding-left: 4rem;
  display: flex;
  transition: all 0.3s 0.1s;
`;

export const NavList = styled.ul`
  display: grid;
  justify-content: right;
  align-content: center;
  grid-auto-flow: column;
  grid-gap: 1.5rem;
`;

export const NavListItem = styled.li`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  &:last-child {
    margin-right: 0;
  }
  &.active {
    a {
      &:after {
        content: "";
        position: absolute;
        left: 1rem;
        bottom: 0.5rem;
        width: calc(100% - 2rem);
        height: 0.2rem;
        transform: scaleX(1);
        background: ${({ theme }) => theme.colors.titleGreen};
        transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
        z-index: 10;
      }
    }
  }
`;
