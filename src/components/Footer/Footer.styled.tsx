import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  min-height: 70px;
  background-color: white;
  border-top: 1px solid grey;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;

  border-radius: 50%;
  border: 1px solid white;
  background-color: ${({ theme }) => theme.color.accentColor};

  transition: all 300ms linear;

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
