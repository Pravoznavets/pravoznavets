import { FC } from "react";
import LoaderImg from "assets/images/loader/loader.gif";
import { LoaderOverlay, ImgLoader, LoaderWrapper } from "./Loader.styled";

const Loader: FC = () => {
  return (
    <LoaderWrapper>
      <LoaderOverlay>
        <ImgLoader src={LoaderImg} alt="Loading....." />
      </LoaderOverlay>
    </LoaderWrapper>
  );
};

export default Loader;
