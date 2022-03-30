import styled from "styled-components";

export const ButtonOutlined: any = styled.button`
  border: 2px solid
    ${({ theme, mode }: any) => (mode ? theme.colors.dark : theme.colors.green)};
  color: ${({ theme, mode }: any) =>
    mode ? theme.colors.dark : theme.colors.green};
  text-transform: lowercase;
  font-size: 18px;
  margin: 0 10px;
  background: transparent;
  cursor: pointer;
  transition: all 0.2s;
  padding: 5px 15px;

  &:hover {
    background-color: ${({ theme, mode }: any) =>
      mode ? theme.colors.dark : theme.colors.green};
    color: ${({ theme, mode }: any) =>
      mode ? theme.colors.white : theme.colors.dark};
  }
  &:active {
    transform: scale(0.95);
  }
`;
