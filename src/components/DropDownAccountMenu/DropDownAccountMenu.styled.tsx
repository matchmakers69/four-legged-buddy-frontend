import styled, { css } from "styled-components";

const sharedIconStyles = css`
  width: 100%;
  height: 100%;
`;

export const MenuSwitcherWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: 3rem;
`;

export const BtnAccountDropDown = styled.button`
  min-width: 5rem;
  width: auto;
  height: 4rem;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  margin: 0;
  border: none;
  cursor: pointer;
`;

export const AccountDetailsTitle = styled.span`
  display: block;
  text-align: center;
  margin-bottom: 2rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.weight.semiBold};
`;

export const UserIconWrapper = styled.span`
  display: block;
  width: 3rem;
  height: 3rem;
  .user-icon {
    ${sharedIconStyles}
  }
`;

export const ArrowDownWrapper = styled.span`
  display: block;
  width: 1.2rem;
  height: 1.2rem;
  .arrow-down {
    ${sharedIconStyles}
  }
`;

export const DrowDownNav = styled.nav`
  position: absolute;
  top: calc(100% + 20px);
  right: 0;
  z-index: 10;
  padding: 2.5rem 2.5rem 2.5rem;
  &:before {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* border: 0.2144em solid #000; */
    box-sizing: content-box;
    content: "";
    z-index: 2;
    background: ${({ theme }) => theme.colors.powderWhite};
  }
  &:after {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border: 0.2144;
    box-sizing: content-box;
    content: "";
    top: 0.714rem;
    left: 0.714rem;
    background: ${({ theme }) => theme.colors.titleGreen};
    z-index: 1;
  }
`;

export const DropDownNavInner = styled.div`
  min-width: 25rem;
  max-width: 30rem;
  width: auto;
  position: relative;
  z-index: 3;
`;

export const DropDownList = styled.ul`
  margin: 0 0 2rem 0;
  padding: 0;

  .list-item {
    font-size: 1.2rem;

    &:last-child {
      margin-right: 0;
      border-bottom: none;
    }
  }
`;

export const DropDownButtonList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .list-button-item {
    margin-bottom: 1rem;
    width: 100%;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;
