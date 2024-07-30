import { FC } from "react";
import NotFoundImage from "assets/images/404.jpg";
import { Link } from "react-router-dom";

const NotFoundPage: FC = () => {
  return (
    <Link to="/">
      <img
        src={NotFoundImage}
        alt="Not found page in book"
        width="50%"
        style={{ marginLeft: "auto", marginRight: "auto" }}
      />
    </Link>
  );
};

export default NotFoundPage;
