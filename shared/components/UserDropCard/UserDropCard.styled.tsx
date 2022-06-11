import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: scale(.95);
    top: 10px;
    opacity: 0;
    z-index: -9999999;
  }

  to {
    transform: rotate(1.2);
    top: 60px;
    opacity: 1;
    z-index: 9999999;

  }
`;

export const Content = styled.div`
  width: 300px;
  background-color: ${({ theme }) => theme.colors["blackGray3"]};
  position: absolute;
  top: 60px;
  padding: 10px 20px;
  right: 10px;
  border-radius: 5px;
  animation: ${rotate} .5s linear;
`;
