import { Navigate, Route, Routes } from "react-router";
import { HomePage } from "../pages/HomePage";
import { MainLayout } from "../../../layouts/MainLayout";
import { AboutPage } from "../pages/AboutPage";
import { ContactPage } from "../pages/ContactPage";
import { DilanPage } from "../pages/DilanPage";
import { MilePage } from "../pages/MilePage";
import { DorianPage } from "../pages/DorianPage";
import { HeaderLayout } from "../../../layouts/components/HeaderLayout";
import { FooterLayout } from "../../../layouts/components/FooterLayout";

export const PublicRoutes = () => {

  return (
    <>

      <HeaderLayout />
      
      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/dilan" element={<DilanPage />} />
        <Route path="/milena" element={<MilePage />} />
        <Route path="/dorian" element={<DorianPage />} />


        {/* <Route path="/*" element={ <LoginPage /> } /> */}
        <Route path="/*" element={ <Navigate to="/login" /> } />
        
      </Routes>

      <FooterLayout />
      
    </>
  )
}
