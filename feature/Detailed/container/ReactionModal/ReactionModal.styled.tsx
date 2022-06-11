import styled from "styled-components";

// export const Content = styled.div`
//   width: 552px;
//   height: 570px;
//   position: absolute;
//   border-radius: 8px;
//   padding: 10px 20px;
//   top: 50%;
//   right: 50%;
//   transform: translate(50%, -50%);
//   /* background-color: ${({ theme }) => theme.colors["blackGrey"]}; */
//   background-color: ${({ theme }) => theme.colors["blackGrey"]};
// `;


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
