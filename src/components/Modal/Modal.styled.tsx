import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  transform: translateY(-100%);

  width: 100vw;
  height: 100vh;

  background-color: white;

  visibility: hidden;
  pointer-events: none;

  transition: transform 300ms linear, visibility 300ms linear,
    scale 300ms linear;

  &.open {
    display: block;
    visibility: visible;
    pointer-events: unset;
    transform: translateY(0);
  }
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  height: 90%;

  font-size: 24px;
`;

export const ModalNavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;

  padding: 12px;

  font-weight: 700;
`;

export const ModalStyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.color.secondaryTextColor};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.color.accentColor};
  }

  &.active {
    color: ${({ theme }) => theme.color.accentColor};
    position: relative;

    &::after {
      display: flex;
      position: absolute;
      bottom: -20px;
      content: "";
      width: 100%;
      height: 4px;
      border-radius: 2px;
      background-color: ${({ theme }) => theme.color.accentColor};
    }
  }
`;

export const ModalNavItem = styled.li`
  padding: 16px 0;
`;

export const ModalContactList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 4px;
`;

export const ModalContactItem = styled.li`
  padding: 12px 0;
`;

export const ModalContactLink = styled.a`
  color: ${({ theme }) => theme.color.secondaryTextColor};
  display: flex;
  align-items: center;
  gap: 4px;
  fill: ${({ theme }) => theme.color.secondaryTextColor};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.color.accentColor};
    fill: ${({ theme }) => theme.color.accentColor};
  }
`;
