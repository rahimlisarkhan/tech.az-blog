import { Box } from "@material-ui/core";
import styled from "styled-components";

export const TitleContentStyled = styled(Box)``;

export const TagContent = styled(Box)`
  display: flex;
  width: 50%;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 10px;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.blackGrey};
`;

export const Tag = styled.strong`
  margin: 0 10px;
  text-transform: lowercase;
  font-weight: normal;
`;
