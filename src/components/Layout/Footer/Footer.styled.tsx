import styled from "styled-components";

export const Footer = styled.footer`
  /* background-color: ${({ theme }) => theme.colors.footerGreen}; */

  &:after {
    content: "";
    width: 100%;
    z-index: 0;
    position: absolute;
    height: 200px;
    background-position: center top;
    pointer-events: none;
    background-repeat: repeat-x;
    background-image: url("/media/svg/footer-bush.svg");
    top: 0;
    left: 0;
  }
  &.contacts {
    position: relative;
    color: ${({ theme }) => theme.colors.powderWhite};
  }
`;

export const FooterContent = styled.div`
  position: relative;
  padding-top: 200px;
`;

export const FooterBgContainer = styled.div`
  margin: 0 auto;
  width: 100%;
`;
