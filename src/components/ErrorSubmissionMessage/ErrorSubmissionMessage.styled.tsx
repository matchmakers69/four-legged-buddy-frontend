import styled from "styled-components";

export const ErrorMessage = styled.p`
  width: 100%;
  margin: 1rem 0;
  padding: 1rem;
  font-weight: ${({ theme }) => theme.weight.semiBold};
  color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  background: ${({ theme }) => theme.colors.powderWhite};
`;
