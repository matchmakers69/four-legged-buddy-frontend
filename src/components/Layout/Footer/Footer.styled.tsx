import styled from "styled-components";

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.shapeColor};
  margin: 15rem 0 0;
  padding: 6rem 0 0;
  position: relative;

  &:before {
    content: "";
    display: block;
    background-color: ${({ theme }) => theme.colors.shapeColor};
    top: 0;
    right: 0;
    left: 0;
    bottom: -10rem;
    z-index: -1;
    position: absolute;
    transform-origin: 0 100%;
    transform: skewY(-3deg);
  }

  &.contacts {
    position: relative;
    color: ${({ theme }) => theme.colors.powderWhite};
  }
`;

export const FooterContent = styled.div`
  margin: 0 auto;
  width: calc(100% - (10rem * (1 / 1)));
  max-width: calc(144rem - (5rem * (1 / 1)));
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  z-index: 2;
  flex-wrap: wrap;
`;

export const FooterBgContainer = styled.div`
  margin: 0 auto;
  width: 100%;
`;
