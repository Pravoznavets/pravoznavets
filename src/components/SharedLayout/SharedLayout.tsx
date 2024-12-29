import { FC, useEffect, useState } from "react";
import Footer from "components/Footer";
import Header from "components/Header";
import AppRoutes from "routes/AppRoutes";
import Modal from "components/Modal";
import { Main } from "./SharedLayout.styled";
import CallButton from "components/CallButton";
import FeedbackForm from "components/FeedbackForm";
import { useLocation } from "react-router-dom";

const SharedLayout: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const bodyRef: HTMLElement | null = document.querySelector("body");
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

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
        <FeedbackForm />
      </Main>
      <Footer />
      <Modal toggleModal={toggleModal} open={isModalOpen} />
      <CallButton />
    </>
  );
};

export default SharedLayout;
