import styled from "styled-components";
import { selectDesktop } from "utils/selectMediaRequests";

export const ArticlesList = styled.ul``;

export const ArticleItem = styled.li`
  width: 100%;
  padding-bottom: 12px;
  border-bottom: 1px solid grey;

  @media ${selectDesktop} {
    width: 100%;
  }

  &:last-child {
    border-bottom: none;
  }
`;
