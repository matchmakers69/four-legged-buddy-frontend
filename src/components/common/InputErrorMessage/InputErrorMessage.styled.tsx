import styled from "styled-components";

export const ErrorMessage = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;
