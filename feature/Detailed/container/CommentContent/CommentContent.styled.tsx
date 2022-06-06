import styled from "styled-components";

export const InputContent = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 80px 0;
`;

export const InputGroup = styled.div`
  width: 85%;
  background-color: ${({ theme }) => theme.colors["whiteGray-50"]};
  padding: 15px;
  height: 81px;
  border-radius: 8px;
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;

  svg {
    fill: ${({ theme }) => theme.colors["whiteGray"]};
  }
`;

export const Input = styled.textarea`
  background-color: transparent;
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
  padding-left: 10px;
  font-weight: 400;
  font-size: 18px;
  color: ${({ theme }) => theme.colors["whiteGray"]};
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors["whiteGray"]};
  }
`;
