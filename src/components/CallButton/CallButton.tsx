import Icon from "components/Icon";
import { CallButtonWrapper } from "./CallButton.styled";
import { Link } from "react-router-dom";

const CallButton = () => {
  return (
    <CallButtonWrapper>
      <Link to="tel:+380938797798">
        <Icon iconName="icon-call" width="32px" height="32px" />
      </Link>
    </CallButtonWrapper>
  );
};

export default CallButton;
