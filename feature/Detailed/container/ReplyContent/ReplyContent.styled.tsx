import styled from "styled-components";

export const Content = styled.div`
  width: 25vw;
  height: 100vh;
  overflow-y: auto;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.blackGrey};
`;

export const ContentHeader = styled.div`
  padding-bottom: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors["whiteGray-20"]};
`;

export const ContentBody = styled.div`
  margin: 20px 0;
  border-top: 1px solid ${({ theme }) => theme.colors["whiteGray-20"]};
`;


export const MessageBox = styled.div`
/* overflow-y: scroll; */
/* max-height:100px; */
` 