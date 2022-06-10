import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 15px ;
`;

export const Message: any = styled.div`
  word-break: break-all;
  width: ${({ width }: any) => (width ? "80%" : "100%")};
  padding: 15px;
  border-radius: 25px 25px 0 25px;
  min-height: 90px;
  margin-right: 5px;
  background-color: ${({ theme }) => theme.colors["whiteGray-50"]};
`;

export const MessageSub = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
`;
