import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  padding: 12px 0;
  margin: 0 auto;

  align-items: center;
`;

export const Logo = styled.div`
  margin-right: 93px;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  color: ${({ theme }) => theme.color.primaryTextColor};
  font-size: ${({ theme }) => theme.fontSize.desktop.logo};
`;

export const LogoLink = styled(NavLink)`
  color: ${({ theme }) => theme.color.primaryTextColor};
`;

export const LogoAccent = styled.span`
  color: ${({ theme }) => theme.color.accentColor};
`;

export const HeaderInfo = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  color: ${({ theme }) => theme.color.secondaryTextColor};
  font-weight: 500;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 50px;
  align-items: center;
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

  gap: 30px;
`;

export const ContactItem = styled.li`
  padding: 32px 0;
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
