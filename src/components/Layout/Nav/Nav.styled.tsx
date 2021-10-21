import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  flex-wrap: wrap;
`;

export const NavListItem = styled.li`
  margin-right: 5px;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  &:last-child {
    margin-right: 0;
  }
`;
