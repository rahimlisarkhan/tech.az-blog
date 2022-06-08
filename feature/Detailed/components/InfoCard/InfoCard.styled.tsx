import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0;
  border-top: 1px solid ${({ theme }) => theme.colors["whiteGray-20"]};
`;
