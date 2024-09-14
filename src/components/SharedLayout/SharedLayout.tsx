import { FC, useState } from "react";
import Footer from "components/Footer";
import Header from "components/Header";
import AppRoutes from "routes/AppRoutes";
import Modal from "components/Modal";
import { Main } from "./SharedLayout.styled";

const SharedLayout: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const bodyRef: HTMLElement | null = document.querySelector("body");

  const toggleModal: () => void = (): void => {
    if (bodyRef !== null) {
      if (isModalOpen) {
        setIsModalOpen(false);
        bodyRef.style.overflow = "visible";
      } else {
        setIsModalOpen(true);
        bodyRef.style.overflow = "hidden";
      }
    }
  };

  return (
    <>
      <Header toggleModal={toggleModal} open={isModalOpen} />
      <Main>
        <AppRoutes />
      </Main>
      <Footer />
      <Modal toggleModal={toggleModal} open={isModalOpen} />
    </>
  );
};

export default SharedLayout;
