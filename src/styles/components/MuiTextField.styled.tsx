import MuiTextField from "@material-ui/core/TextField";
import styled from "styled-components";

export const TextField = styled(MuiTextField)`
  && {
    width: 100%;
    background-color: transparent;
    padding: 8px 10px;
    font-size: 14px;

    .MuiInputBase-root {
      font-size: inherit;
    }

    .MuiInputLabel-root {
      font-family: inherit;
      font-weight: 500;
      font-size: inherit;
      color: #000;
      margin-bottom: 10px;

      &.Mui-focused,
      &.MuiFormLabel-filled {
        display: block;
      }

      &.Mui-error {
        color: #666;
      }
    }

    .MuiInputBase-input {
      height: 5rem;
      border: 4px solid ${({ theme }) => theme.colors.titleGreen};
      background-color: ${({ theme }) => theme.colors.powderWhite};
      padding: 1rem;
      box-sizing: border-box;
      animation: none;
    }

    &.Mui-focused,
    &.MuiFormLabel-filled {
      display: none;
    }

    .MuiInputLabel-root {
      display: block;
      transform-origin: 0 0;
    }

    .MuiInputLabel-formControl {
      position: static;
    }
    .MuiInputLabel-animated {
      transition: none;
    }
    .MuiInputLabel-outlined {
      transform: translate(0) scale(1);
    }
    fieldset,
    legend,
    span {
      display: none;
    }
  }
`;
