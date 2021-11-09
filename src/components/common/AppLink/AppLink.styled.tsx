import styled from "styled-components";
import { device } from "src/styles/breakpoints";

export const StyledLink = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.weight.semiBold};
  color: ${({ theme }) => theme.colors.titleGreen};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 1rem;
  position: relative;

  .text-button {
    display: inline-flex;
    color: inherit;
    position: relative;
    z-index: 5;
  }
  &.appLink-link {
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
  }
  &.appLink-button {
    padding: 1.6rem;
    width: 100%;
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: color 0.3s cubic-bezier(1, 0, 0, 1);
    transition-delay: 100ms;
    z-index: 12;
    &:before {
      background: ${({ theme }) => theme.colors.titleGreen};
      z-index: -1;
      transition: transform 0.4s cubic-bezier(1, 0, 0, 1);
      will-change: transform;
      transform-origin: 100% 100%;
      transform: translate3d(-100%, 0, 0) skewX(25deg);
      display: block;
      padding: inherit;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      content: "";
      width: 105%;
      z-index: 4;
    }
    .icon-link {
      width: 14px;
      height: 14px;
      display: flex;
      justify-content: column;
      align-items: center;
      justify-content: center;
      margin-left: 0.8rem;
      z-index: 12;
      position: relative;
      svg {
        path {
          transition: fill 0.3s cubic-bezier(1, 0, 0, 1);
          transition-delay: 100ms;
          fill: ${({ theme }) => theme.colors.titleGreen};
        }
      }
    }
  }
  @media ${device.laptop} {
    &.appLink-link {
      &:hover {
        &:after {
          transform: scaleX(1);
        }
      }
    }
    &.appLink-button {
      &:hover {
        color: ${({ theme }) => theme.colors.powderWhite};
        .icon-link {
          svg {
            path {
              fill: ${({ theme }) => theme.colors.powderWhite};
            }
          }
        }
        &:before {
          transform: translate3d(0, 0, 0) skewX(0deg);
        }
      }
    }
  }
`;
