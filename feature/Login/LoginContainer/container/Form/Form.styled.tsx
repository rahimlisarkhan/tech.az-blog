import styled from "styled-components";


export const SubmitButton = styled.button`
  width: 100%;
  height: 53px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.blackGrey};
  font-size: 20px;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.2s;
  margin: 30px 0 15px 0;
  &:hover {
    background-color: ${({ theme }) => theme.colors.bgGreen};
  }
`;
