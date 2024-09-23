import { FC } from "react";
import icons from "assets/icons/sprite.svg";

type IconProps = {
  iconName: string;
  width?: string;
  height?: string;
};

const Icon: FC<IconProps> = ({ width, height, iconName }) => {
  return (
    <svg
      width={width || "24px"}
      height={height || "24px"}
      preserveAspectRatio="xMidYMid meet"
      style={{ display: "block" }}
    >
      <use href={`${icons}#${iconName}`} />
    </svg>
  );
};

export default Icon;
