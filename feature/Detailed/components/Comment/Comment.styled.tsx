import styled from "styled-components";

export const CommentContainer = styled.div`
  max-width: 85%;
  margin-bottom: 40px;
`;

export const Content = styled.div`
  padding: 20px;
  min-height: 167px;
  border-radius: 8px;
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.colors["whiteGray-50"]};
`;

export const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors["whiteGray-20"]};
`;

export const CommentHeaderUser = styled.div`
  display: flex;
  align-items: center;
`;

export const SubInfoContent = styled.div`
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SubInfo = styled.div`
  display: flex;
  align-items: center;
  max-width: 120px;
  height: 30px;
  padding: 10px;
  border-radius: 25px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors["whiteGray-50"]};
  transition: all 0.2s;
  svg {
    fill: ${({ theme }) => theme.colors["green"]};
  }

  &:hover {
    transform: scale(0.98);
  }
`;
