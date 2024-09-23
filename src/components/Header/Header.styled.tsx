import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { selectDesktop, selectTablet } from "utils/selectMediaRequests";

export const HeaderThumb = styled.div`
  position: fixed;
  width: 100%;
  border-bottom: 1px solid grey;
  background-color: white;
  z-index: 2;
`;

export const HeaderContainer = styled.header`
  display: flex;

  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 12px 0;
  margin: 0 auto;
`;

export const Logo = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  color: ${({ theme }) => theme.color.primaryTextColor};
  font-size: ${({ theme }) => theme.fontSize.desktop.logo};

  @media ${selectDesktop} {
    padding: 24px 0;
  }
`;

export const LogoLink = styled(NavLink)`
  color: ${({ theme }) => theme.color.primaryTextColor};

  @media ${selectDesktop} {
    margin-right: 93px;
  }
`;

export const LogoAccent = styled.span`
  color: ${({ theme }) => theme.color.accentColor};
`;

export const HeaderInfo = styled.div`
  display: none;
  justify-content: space-between;

  width: 100%;

  color: ${({ theme }) => theme.color.secondaryTextColor};
  font-weight: 500;

  @media ${selectTablet} {
    display: flex;
  }

  @media ${selectDesktop} {
    display: flex;
  }
`;

export const NavList = styled.ul`
  padding-left: 20px;
  display: flex;
  gap: 30px;
  align-items: center;

  @media ${selectDesktop} {
    padding-left: 0px;
    gap: 50px;
  }
`;

export const StyledLink = styled(NavLink)`
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

export const NavItem = styled.li`
  padding: 32px 0;
`;

export const ContactList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${selectDesktop} {
    flex-direction: row;
    gap: 30px;
  }
`;

export const ContactItem = styled.li`
  padding: 8px 0;

  @media ${selectDesktop} {
    padding: 32px 0;
  }
`;

export const ContactLink = styled.a`
  color: ${({ theme }) => theme.color.secondaryTextColor};
  display: flex;
  align-items: center;
  gap: 12px;
  fill: ${({ theme }) => theme.color.secondaryTextColor};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.color.accentColor};
    fill: ${({ theme }) => theme.color.accentColor};
  }
`;
