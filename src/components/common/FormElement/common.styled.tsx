import styled, { css } from "styled-components";
import { device } from "src/styles/breakpoints";

const commonInputStyles = css`
  background-color: ${({ theme }) => theme.colors.powderWhite};
  border-radius: 0;
  height: 6rem;
  border: 4px solid ${({ theme }) => theme.colors.titleGreen};
  padding: 1rem;
  color: ${({ theme }) => theme.colors.titleGreen};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-weight: 700;
  @media ${device.laptop} {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.mustardLabel};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 700;
  display: block;
  margin-bottom: 0.7rem;
  @media ${device.laptop} {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;

export const Input = styled.input`
  ${commonInputStyles};
  width: 100%;

  &:focus {
    box-shadow: 0px 0px 5px 0px rgba(69, 43, 120, 0.8);
    outline: transparent;
  }

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colors.fadeGreen};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    @media ${device.laptop} {
      font-size: ${({ theme }) => theme.fontSizes.sm};
    }
  }
  :-ms-input-placeholder {
    color: rgba(69, 43, 120, 0.3);
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: ${({ theme }) => theme.colors.fadeGreen};
    @media ${device.laptop} {
      font-size: ${({ theme }) => theme.fontSizes.sm};
    }
  }
`;

export const TextArea = styled.textarea`
  ${commonInputStyles};
  width: 100%;
  display: block;
  min-height: 100px;
  resize: none;
  font-family: ${({ theme }) => theme.fontFamily.primary};
  &:focus {
    box-shadow: 0px 0px 2px 0px rgba(69, 43, 120, 0.5);
    outline: transparent;
  }

  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: ${({ theme }) => theme.colors.fadeGreen};
    @media ${device.laptop} {
      font-size: ${({ theme }) => theme.fontSizes.sm};
    }
  }
  :-ms-input-placeholder {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: ${({ theme }) => theme.colors.fadeGreen};
    @media ${device.laptop} {
      font-size: ${({ theme }) => theme.fontSizes.sm};
    }
  }
`;
