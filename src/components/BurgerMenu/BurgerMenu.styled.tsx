import styled from "styled-components";
import { selectTablet } from "utils/selectMediaRequests";

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  fill: black;
  stroke: black;

  @media ${selectTablet} {
    display: none;
  }
`;
