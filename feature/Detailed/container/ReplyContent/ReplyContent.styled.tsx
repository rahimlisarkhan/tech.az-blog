import styled from "styled-components";

export const Content = styled.div`
  width: 25vw;
  height: 100vh;
  overflow-y: auto;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.colors.blackGrey};

  &::-webkit-scrollbar {
    width: 1px;
  }
`;

export const ContentHeader = styled.div`
  padding-bottom: 20px;
  margin-bottom: 20px;
  display: flex;
  position: sticky;
  top: 0;
  padding: 15px !important;
  background-color: ${({ theme }) => theme.colors.blackGrey};
  z-index: 999999;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors["whiteGray-20"]};
`;

export const ContentBody = styled.div`
  margin: 20px 0;
  border-top: 1px solid ${({ theme }) => theme.colors["whiteGray-20"]};
`;

export const MessageBox = styled.div`
  margin: 10px 0;
`;

export const MessageInput = styled.div`
  position: sticky;
  bottom: 0;
  /* border-top: 1px solid ${({ theme }) => theme.colors["whiteGray-20"]}; */
  background-color: ${({ theme }) => theme.colors.blackGrey};
`;
