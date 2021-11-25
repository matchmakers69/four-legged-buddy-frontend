import styled from "styled-components";
import { device } from "src/styles/breakpoints";

export const Button = styled.button`
  cursor: pointer;
  box-shadow: none;
  text-shadow: none;
  border-radius: 0;
  height: 4.5rem;
  padding: 1.5rem 1.6rem;
  margin: 0;
  display: inline-flex;
  min-width: 12rem;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  transition: all 0.3s ease;
  outline: transparent;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-weight: ${({ theme }) => theme.weight.semiBold};
  letter-spacing: 0.5px;
  border: none;

  &:not(:last-child) {
    margin-right: 16px;
  }

  &.btn--submit {
    background-color: ${({ theme }) => theme.colors.titleGreen};
    color: ${({ theme }) => theme.colors.powderWhite};
    border: 4px solid ${({ theme }) => theme.colors.titleGreen};
  }

  &.btn--logout {
    background-color: ${({ theme }) => theme.colors.titleGreen};
    color: ${({ theme }) => theme.colors.powderWhite};
    border: 4px solid ${({ theme }) => theme.colors.titleGreen};
  }

  &.btn--login {
    background-color: ${({ theme }) => theme.colors.powderWhite};
    color: ${({ theme }) => theme.colors.titleGreen};
    border: 4px solid ${({ theme }) => theme.colors.titleGreen};
  }

  &.w-full {
    min-width: 100%;
    width: 100%;
  }

  &.btn--link {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.titleGreen};
    padding: 0;
    border: 4px solid ${({ theme }) => theme.colors.titleGreen};
  }

  &.btn--danger {
    background-color: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.powderWhite};
    border: 4px solid ${({ theme }) => theme.colors.red};
  }

  &.btn--button {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.titleGreen};
    border: 4px solid ${({ theme }) => theme.colors.titleGreen};
    position: relative;
    overflow: hidden;
    transition: color 0.3s cubic-bezier(1, 0, 0, 1);
    transition-delay: 100ms;
    z-index: 12;
    .button-text {
      display: block;
      position: relative;
      z-index: 15;
      color: inherit;
      transition: color 0.3s cubic-bezier(1, 0, 0, 1);
      transition-delay: 100ms;
    }
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
    @media ${device.laptop} {
      &:hover {
        .button-text {
          color: ${({ theme }) => theme.colors.powderWhite};
        }

        &:before {
          transform: translate3d(0, 0, 0) skewX(0deg);
        }
      }
    }
  }

  &.btn--primary {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.titleGreen};
    border: 4px solid ${({ theme }) => theme.colors.titleGreen};
  }

  &:disabled {
    opacity: 0.3;
    pointer-events: none;
  }
  &:focus {
    box-shadow: 0px 0px 5px 0px rgba(69, 43, 120, 0.8);
    outline: transparent;
  }
`;
