import styled from "styled-components";

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
`;


export const ModalBody = styled.div`
    overflow-y: auto;
    height: 85%;

    &::-webkit-scrollbar {
  width: 1px;
}
`;
