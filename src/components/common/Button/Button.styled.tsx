import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  box-shadow: none;
  text-shadow: none;
  border-radius: 0;
  height: 40px;
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

  &.btn--link {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.titleGreen};
    padding: 0;
    border: 4px solid ${({ theme }) => theme.colors.titleGreen};
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
    color: ${({ theme }) => theme.colors.powderWhite};
    box-shadow: 0px 0px 8px 0px #e9f8ff;
    outline: ${({ theme }) => `1px solid ${theme.colors.lightBlue}`};
  }
`;
