import { FC } from "react";
import LoaderImg from "assets/images/loader/loader.gif";
import { LoaderOverlay, ImgLoader } from "./Loader.styled";

const Loader: FC = () => {
  return (
    <LoaderOverlay>
      <ImgLoader src={LoaderImg} alt="Loading....." />
    </LoaderOverlay>
  );
};

export default Loader;
