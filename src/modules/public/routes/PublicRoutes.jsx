import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { MainLayout } from "../../../layouts/MainLayout";
import { AboutPage } from "../pages/AboutPage";
import { ContactPage } from "../pages/ContactPage";

export const PublicRoutes = () => {
  return (
    <>
    
      <Routes>
        
        <Route 
          path="/" 
          element={
            <HomePage />
          } 
        />

        <Route 
          path="/about" 
          element={
            <MainLayout>
              <AboutPage />
            </MainLayout>
          } 
        />

        <Route 
          path="/contact" 
          element={
            <MainLayout>
              <ContactPage />
            </MainLayout>
          } 
        />



        {/* <Route path="/*" element={ <LoginPage /> } /> */}
        <Route path="/*" element={ <Navigate to="/login" /> } />
        
      </Routes>
      
    </>
  )
}
