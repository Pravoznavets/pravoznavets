import { DivContainer } from "./Container.styled";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <DivContainer>{children}</DivContainer>;
};

export default Container;
