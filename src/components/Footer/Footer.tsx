import Icon from "components/Icon";
import { FooterWrapper, IconWrapper } from "./Footer.styled";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <FooterWrapper>
      <IconWrapper>
        <NavLink to={`/`} target="blank">
          <Icon iconName="icon-linkedin" />
        </NavLink>
      </IconWrapper>
      <IconWrapper>
        <NavLink to={`/`} target="blank">
          <Icon iconName="icon-instagram" />
        </NavLink>
      </IconWrapper>
      <IconWrapper>
        <NavLink to={`/`} target="blank">
          <Icon iconName="icon-send" />
        </NavLink>
      </IconWrapper>
    </FooterWrapper>
  );
};

export default Footer;
