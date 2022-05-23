import styled from "styled-components";

export const InputGroup = styled.div`
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  height: 53px;
  font-size: 20px;
  border: 3px solid ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blackGrey};
  color: ${({ theme }) => theme.colors.white} !important;
  padding: 10px;
  border-radius: 5px;
  padding-left: 40px;
  margin: 20px 0;

  &::placeholder {
    color: ${({ theme }) => theme.colors.white} !important;
    opacity: 0.7;
  }

  &:focus {
    border: 3px solid ${({ theme }) => theme.colors.green};
    outline: ${({ theme }) => theme.colors.green};
  }
`;

export const InputIcon = styled.div`
  position: absolute;
  top: 35px;
  left: 10px;
  svg {
    fill: ${({ theme }) => theme.colors.white};
  }
`;
