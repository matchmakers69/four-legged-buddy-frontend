import styled from "styled-components";
import { device } from "src/styles/breakpoints";

export const Modal = styled.div`
  max-height: 600px;
  width: 100%;
  max-width: 500px;
  background-color: ${({ theme }) => theme.colors.powderWhite};
  padding: 20px;
  z-index: 100;
  border-radius: 10px;
`;

export const ModalHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  font-size: 2.5rem;
`;

export const ModalBody = styled.div`
  padding-top: 1rem;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
`;
