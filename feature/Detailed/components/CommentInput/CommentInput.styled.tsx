import styled from "styled-components";

export const InputContent: any = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: ${({ reply }: any) => (reply ? "column" : "row")};
  align-items: ${({ reply }: any) => (reply ? "flex-end" : "flex-start")};
  margin: 80px 0;
`;

export const InputGroup: any = styled.div`
  width: ${({ reply }: any) => (reply ? "100%" : "90%")};
  background-color: ${({ theme }) => theme.colors["whiteGray-50"]};
  padding: 15px;
  height: ${({ reply }: any) => (reply ? "65px" : "131px")};
  border-radius: 8px;
  display: flex;
  position: relative;
  margin-bottom: 10px;
  justify-content: space-between;
  align-items: ${({ reply }: any) => (reply ? "center" : "flex-start")};

  svg {
    fill: ${({ theme }) => theme.colors["whiteGray"]};
  }
`;

export const Input: any = styled.textarea`
  background-color: transparent;
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
  padding-left: 10px;
  font-weight: 400;
  font-size: ${({ reply }: any) => (reply ? "16px" : "18px")};
  color: ${({ theme }) => theme.colors["whiteGray"]};
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors["whiteGray"]};
    font-size: ${({ reply }: any) => (reply ? "16px" : "18px")};
  }
`;
