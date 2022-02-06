import styled, { css } from "styled-components";
import { device } from "../breakpoints";

const skewShapeCommon = css`
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.powderWhite};
  z-index: -1;
  position: absolute;
`;

const sharedLinkStyles = css`
  display: block;
  font-size: 1.8rem;
  font-weight: ${({ theme }) => theme.weight.bold};
  color: ${({ theme }) => theme.colors.logoLightGreen};
  font-family: ${({ theme }) => theme.fontFamily.primary};
`;

export const HeaderForm = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

export const HeaderColLeft = styled.div`
  .formHeaderTitle {
    font-size: 1.8rem;
    font-weight: ${({ theme }) => theme.weight.bold};
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fontFamily.primary};
    display: block;
  }
`;

export const HeaderColRight = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .formHeaderLink {
    ${sharedLinkStyles}
  }
`;

export const FormHeaderSubtitle = styled.span`
  display: inline-block;
  font-size: 1.8rem;
  font-family: ${({ theme }) => theme.fontFamily.primary};
`;

export const FormFooter = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6px;
  .footerLink {
    ${sharedLinkStyles}
    font-size: ${({ theme }) => theme.fontSizes.xs};
    text-decoration: underline;
  }
`;

export const FormWrapperSkew = styled.div`
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.powderWhite};
  position: relative;
  overflow: visible;
  padding: 3rem 1.5rem;
  @media ${device.mobileM} {
    padding: 3rem 4rem;
  }

  @media ${device.tablet} {
    padding: 3rem 6rem;
  }

  &:after {
    ${skewShapeCommon};
    clip-path: polygon(0 10%, 100% 0, 100% 91%, 0 100%);
    bottom: -4rem;
    right: 0;
  }
`;

export const Form = styled.form`
  width: 100%;
  overflow: hidden;
`;
