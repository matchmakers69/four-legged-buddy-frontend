import styled from "styled-components";

export const Logo = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: ${({ theme }) => theme.weight.semiBold};
  color: ${({ theme }) => theme.colors.lightBlue};
  display: block;
`;
