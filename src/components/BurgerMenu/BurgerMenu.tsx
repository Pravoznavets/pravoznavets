import React from "react";
import Icon from "components/Icon";
import { IconContainer } from "./BurgerMenu.styled";

type Props = {
  toggleModal: () => void;
  open: boolean;
};

const BurgerMenu: React.FC<Props> = ({ toggleModal, open }) => {
  return (
    <IconContainer onClick={toggleModal}>
      <Icon
        iconName={open ? "icon-cross" : "icon-menu"}
        width="32px"
        height="32px"
      />
    </IconContainer>
  );
};

export default BurgerMenu;
