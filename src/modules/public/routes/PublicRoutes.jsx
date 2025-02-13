import { Navigate, Route, Routes } from "react-router";
import { HomePage } from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";
import { ContactPage } from "../pages/ContactPage";
import { HeaderLayout } from "../../../layouts/components/HeaderLayout";
import { FooterLayout } from "../../../layouts/components/FooterLayout";


export const PublicRoutes = () => {
  return (
    <>

      <HeaderLayout />

      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />

        <Route path="/*" element={ <Navigate to="/" /> } />

      </Routes>

      <FooterLayout />

    </>
  )
}
