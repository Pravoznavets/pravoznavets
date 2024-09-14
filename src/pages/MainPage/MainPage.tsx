import { FC } from "react";
import Hero from "pages/MainPage/Hero";
import Services from "./Services";
import Lawyer from "./Lawyer";
import ReferenceList from "./ReferenceList";

const MainPage: FC = () => {
  return (
    <>
      <Hero />
      <Lawyer />
      <ReferenceList />
      <Services />
    </>
  );
};

export default MainPage;
