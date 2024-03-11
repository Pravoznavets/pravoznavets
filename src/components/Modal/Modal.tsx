import React from "react";
import {
  Backdrop,
  ModalContactItem,
  ModalContactLink,
  ModalContactList,
  ModalNavItem,
  ModalNavList,
  ModalStyledLink,
  ModalWrapper,
} from "./Modal.styled";
import Header from "components/Header";
import Icon from "components/Icon";

type Props = {
  open: boolean;
  toggleModal: () => void;
};

const Modal: React.FC<Props> = ({ toggleModal, open }) => {
  return (
    <>
      <Backdrop className={open ? "open" : ""}>
        <Header toggleModal={toggleModal} open={open} />
        <ModalWrapper>
          <nav>
            <ModalNavList>
              <ModalNavItem onClick={toggleModal}>
                <ModalStyledLink to="/">Головна</ModalStyledLink>
              </ModalNavItem>
              <ModalNavItem onClick={toggleModal}>
                <ModalStyledLink to="articles">Статті </ModalStyledLink>
              </ModalNavItem>
              <ModalNavItem onClick={toggleModal}>
                <ModalStyledLink to="services">Послуги </ModalStyledLink>
              </ModalNavItem>
            </ModalNavList>
          </nav>
          <ModalContactList>
            <ModalContactItem>
              <ModalContactLink href="tel:+380938797798">
                <Icon iconName="icon-phone" />
                <span>+38 093 879 77 98</span>
              </ModalContactLink>
            </ModalContactItem>
            <ModalContactItem>
              <ModalContactLink href="mailto:info@pravoznavets.kiev.ua">
                <Icon iconName="icon-mail" />
                <span>info@pravoznavets.kiev.ua</span>
              </ModalContactLink>
            </ModalContactItem>
          </ModalContactList>
        </ModalWrapper>
      </Backdrop>
    </>
  );
};

export default Modal;
