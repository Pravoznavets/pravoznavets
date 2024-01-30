import { FC } from "react";
import Footer from "components/Footer";
import Header from "components/Header";
import AppRoutes from "routes/AppRoutes";

const SharedLayout: FC = () => {
  return (
    <>
      <Header />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </>
  );
};

export default SharedLayout;
