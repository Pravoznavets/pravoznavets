import React from "react";
import {
  ContactItem,
  ContactList,
  HeaderContainer,
  HeaderInfo,
  LogoLink,
  Logo,
  LogoAccent,
  NavItem,
  NavList,
  StyledLink,
  ContactLink,
} from "./Header.styled";
import Container from "components/Container";
import Icon from "components/Icon/Icon";
import BurgerMenu from "components/BurgerMenu";

type Props = {
  toggleModal: () => void;
  open: boolean;
};

const Header: React.FC<Props> = ({ toggleModal, open }) => {
  return (
    <div
      style={{
        borderBottom: `1px solid grey`,
      }}
    >
      <Container>
        <HeaderContainer>
          <LogoLink to="/">
            <Logo>
              <LogoAccent lang="uk">Право</LogoAccent>знавець
            </Logo>
          </LogoLink>
          <HeaderInfo>
            <nav>
              <NavList>
                <NavItem>
                  <StyledLink to="/">Головна </StyledLink>
                </NavItem>
                <NavItem>
                  <StyledLink to="services">Послуги </StyledLink>
                </NavItem>
                <NavItem>
                  <StyledLink to="articles">Статті </StyledLink>
                </NavItem>
              </NavList>
            </nav>
            <ContactList>
              <ContactItem>
                <ContactLink href="tel:+380938797798">
                  <Icon iconName="icon-phone" />
                  <span>+38 093 879 77 98</span>
                </ContactLink>
              </ContactItem>
              <ContactItem>
                <ContactLink href="mailto:info@pravoznavets.kiev.ua">
                  <Icon iconName="icon-mail" />
                  <span>info@pravoznavets.kiev.ua</span>
                </ContactLink>
              </ContactItem>
            </ContactList>
          </HeaderInfo>
          <BurgerMenu toggleModal={toggleModal} open={open} />
        </HeaderContainer>
      </Container>
    </div>
  );
};

export default Header;
