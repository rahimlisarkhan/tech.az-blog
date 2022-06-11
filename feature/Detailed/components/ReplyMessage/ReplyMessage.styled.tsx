import styled from "styled-components";

export const Content: any = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ user }: any) => (user ? "flex-end" : "flex-start")};
  margin-bottom: 15px;
`;

export const Message: any = styled.div`
  word-break: break-all;
  width: ${({ width }: any) => (width ? "80%" : "100%")};
  padding: 0 15px;
  border-radius: ${({ user }: any) =>
    !user ? "25px 25px 25px 0" : "25px 25px 0 25px"};
  min-height: 90px;
  margin-right: 5px;
  background-color: ${({ theme }) => theme.colors["whiteGray-50"]};
`;

export const MessageSub: any = styled.div`
  display: flex;
  flex-direction: ${({ user }: any) => (user ? "row" : "row-reverse")};
  justify-content: space-between;
  margin-top: 12px;
`;
