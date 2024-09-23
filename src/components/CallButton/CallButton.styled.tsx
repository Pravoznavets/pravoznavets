import styled, { keyframes } from "styled-components";
import { selectTablet } from "utils/selectMediaRequests";

const pulse = keyframes`
0% {
  box-shadow: rgba(203, 171, 97, 0.8) 0px 0px 0px 0px;
}
70% {
  box-shadow: rgba(28, 54, 110, 0) 0px 0px 5px 12px;
}
100% {
  box-shadow: rgba(28, 54, 110, 0) 0px 0px 0px 0px;
}
`;

export const CallButtonWrapper = styled.div`
  position: fixed;
  right: 3%;
  bottom: 3%;

  width: 60px;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  border: 2px solid white;
  background-color: ${({ theme }) => theme.color.accentColor};

  transition: all 300ms linear;

  animation: ${pulse} 3s infinite;

  @media ${selectTablet} {
    display: none;
  }

  & svg {
    fill: ${({ theme }) => theme.color.accentColor};
    stroke: white;
  }

  &:hover,
  &:focus {
    scale: 1.1;
    background-color: white;
    border-color: ${({ theme }) => theme.color.accentColor};

    & svg {
      fill: white;
      stroke: ${({ theme }) => theme.color.accentColor};
    }
  }
`;
