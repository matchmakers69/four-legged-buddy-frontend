import styled from "styled-components";

export const MenuSwitcherWrapper = styled.div`
  position: relative;
  margin-left: 10px;
`;

export const LanguageList = styled.ul`
  top: 100%;
  position: absolute;
  z-index: 10;
  right: 0;
  min-width: 200px;
  max-width: 220px;
  background: ${({ theme: { colors } }) => colors.powderWhite};
  padding: 1.5rem 1.5rem 0.5rem 1.5rem;

  .list-item {
    font-size: 1.2rem;

    &:last-child {
      margin-right: 0;
      border-bottom: none;
    }
  }
`;
