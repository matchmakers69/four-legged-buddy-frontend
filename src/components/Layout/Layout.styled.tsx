import styled from "styled-components";
import { device } from "src/styles/breakpoints";

export const PageRoot = styled.div`
  width: 100%;
  min-height: calc(var(--vh, 1vh) * 100);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  @media ${device.tabletS} {
    padding-top: 7rem;
  }
`;
