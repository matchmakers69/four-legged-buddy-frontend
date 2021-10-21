import styled from "styled-components";

export const StyledLink = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.weight.thin};
  color: ${({ theme }) => theme.colors.onyx};
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;
