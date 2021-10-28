import styled from "styled-components";
import { device } from "src/styles/breakpoints";

export const StyledLink = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.weight.semiBold};
  color: ${({ theme }) => theme.colors.titleGreen};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 1rem;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    left: 1rem;
    bottom: 0.5rem;
    width: calc(100% - 2rem);
    height: 0.2rem;
    transform: scaleX(0);
    background: ${({ theme }) => theme.colors.titleGreen};
    transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  @media ${device.laptopM} {
    &:hover {
      &:after {
        transform: scaleX(1);
      }
    }
  }
`;
