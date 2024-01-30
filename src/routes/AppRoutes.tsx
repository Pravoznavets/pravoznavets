import { FC, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const MainPage = lazy(() => import("pages/MainPage"));
const ArticlesPage = lazy(() => import("pages/ArticlesPage"));
const ServicesPage = lazy(() => import("pages/ServicesPage"));
const NotFoundPage = lazy(() => import("pages/NotFoundPage"));

const AppRoutes: FC = () => {
  return (
    <>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="articles" element={<ArticlesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
