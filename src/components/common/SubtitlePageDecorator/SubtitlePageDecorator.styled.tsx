import styled from "styled-components";
import { device } from "src/styles/breakpoints";

export const PageTopline = styled.p`
  color: ${({ theme }) => theme.colors.mustard};
  font-weight: ${({ theme }) => theme.weight.semiBold};
  text-transform: uppercase;
  &:after {
    margin: 1.885rem 0;
    background-color: #ba8d0f;
    background: ${({ theme }) => theme.colors.mustard};
    border-radius: 0.7rem;
    content: "";
    display: block;
    width: 5rem;
    height: 0.7rem;
  }
  @media ${device.tabletS} {
    font-size: 2.6rem;
  }
`;
