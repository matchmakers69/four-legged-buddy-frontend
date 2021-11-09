import styled, { css } from "styled-components";
import { device } from "src/styles/breakpoints";

const SharedStyles = css`
  color: ${({ theme }) => theme.colors.mustard};
  font-weight: ${({ theme }) => theme.weight.semiBold};
  text-transform: uppercase;
`;

const SharedPseudoClassAfter = css`
  margin: 1.885rem 0;
  background-color: ${({ theme }) => theme.colors.darkMustard};
  background: ${({ theme }) => theme.colors.mustard};
  border-radius: 0;
  content: "";
  display: block;
  width: 5rem;
  height: 0.5rem;
`;

export const SubtitleDecorator = styled.p`
  ${SharedStyles}
  margin-bottom: 4.5rem;
  &:after {
    ${SharedPseudoClassAfter}
  }
  @media ${device.tabletS} {
    font-size: 2.6rem;
  }
`;
export const TitleDecorator = styled.h1`
  ${SharedStyles}
  padding: 0;
  margin: 0;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  &:after {
    ${SharedPseudoClassAfter}
  }
  @media ${device.tabletS} {
    font-size: 2.6rem;
  }
`;
