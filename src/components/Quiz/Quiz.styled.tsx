import MuiTextField from "@material-ui/core/TextField";
import styled from "styled-components";

export const FormContainer = styled.div`
  max-width: 50rem;
  margin: 0 auto;
  width: 100%;
`;

export const Question = styled.div`
  max-width: 40rem;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.titleGreen};
  padding: 1.2rem;
  margin-bottom: 0.7rem;
`;

export const Answer = styled.div`
  margin: 1.2rem;
`;

export const Points = styled(MuiTextField)`
  && {
    width: 5rem;
    background-color: transparent;
    padding: 0;
    font-size: 14px;

    .MuiInputBase-root {
      font-size: inherit;
    }
  }
`;

export const Controls = styled.div`
  margin: 12px;
`;
