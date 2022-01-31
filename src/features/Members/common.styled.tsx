import styled, { css } from "styled-components";

const SharedStyles = css`
  margin: 10px;
  padding: 0;
  border: none;
  background-color: transparent;
`;

export const Member = styled.div`
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  background-color: #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const TitleMember = styled.h3`
  margin-bottom: 10px;
  flex: 2;
`;

export const BtnDelete = styled.button`
  ${SharedStyles}
  color: red;
`;

export const BtnEdit = styled.button`
  ${SharedStyles}
`;
