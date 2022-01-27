import styled, { css } from "styled-components";

const commonInputStyles = css`
  background-color: ${({ theme }) => theme.colors.powderWhite};
  border-radius: 0;
  height: 5rem;
  border: 3px solid ${({ theme }) => theme.colors.titleGreen};
  padding: 1rem;
  color: ${({ theme }) => theme.colors.titleGreen};
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.titleGreen};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  display: block;
  margin-bottom: 0.5rem;
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
    color: rgba(69, 43, 120, 0.3);
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
  :-ms-input-placeholder {
    color: rgba(69, 43, 120, 0.3);
    font-size: ${({ theme }) => theme.fontSizes.xs};
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
    color: rgba(69, 43, 120, 0.3);
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
  :-ms-input-placeholder {
    color: rgba(69, 43, 120, 0.3);
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;
