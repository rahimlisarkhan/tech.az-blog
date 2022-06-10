import styled from "styled-components";

export const SubmitButton: any = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 53px;
  border-radius: 5px;
  background-color: ${({ theme, color }: any) => theme.colors[color]};
  color: ${({ theme }) => theme.colors.blackGrey};
  font-size: 20px;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.4s;
  margin-top: 15px;
  &:hover {
    background-color: ${({ theme, hover }: any) => theme.colors[hover]};
  }
`;
