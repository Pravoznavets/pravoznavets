import Icon from "components/Icon";
import { FooterWrapper, IconWrapper } from "./Footer.styled";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <FooterWrapper>
      <IconWrapper>
        <NavLink
          to={`https://www.linkedin.com/in/oksana-shulga-5091a8290`}
          target="blank"
        >
          <Icon iconName="icon-linkedin" />
        </NavLink>
      </IconWrapper>
      {/* <IconWrapper>
        <NavLink to={`/`} target="blank">
          <Icon iconName="icon-instagram" />
        </NavLink>
      </IconWrapper> */}
      <IconWrapper>
        <NavLink
          to="https://t.me/AdvokatOkcana"
          target="blank"
          rel="noopener noreferrer"
        >
          <Icon iconName="icon-send" />
        </NavLink>
      </IconWrapper>
    </FooterWrapper>
  );
};

export default Footer;
