import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  box-shadow: none;
  text-shadow: none;
  border-radius: 4px;
  height: 40px;
  padding: 1.5rem 2.2rem;
  margin: 0;
  display: inline-flex;
  min-width: 12rem;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  transition: all 0.3s ease;
  outline: transparent;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  border: none;

  &:not(:last-child) {
    margin-right: 16px;
  }

  &.btn--danger {
    background: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.powderWhite};
  }

  &.btn--secondary {
    background: ${({ theme }) => theme.colors.lightBrown};
    color: ${({ theme }) => theme.colors.powderWhite};
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
