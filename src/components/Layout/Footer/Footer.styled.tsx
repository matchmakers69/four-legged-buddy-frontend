import styled from "styled-components";

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.footerColor};

  &.contacts {
    position: relative;
    color: ${({ theme }) => theme.colors.powderWhite};
  }
`;

export const FooterContent = styled.div`
  position: relative;
`;

export const FooterBgContainer = styled.div`
  margin: 0 auto;
  width: 100%;
`;
