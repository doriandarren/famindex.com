import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { MainLayout } from "../../../layouts/MainLayout";
import { AboutPage } from "../pages/AboutPage";
import { ContactPage } from "../pages/ContactPage";
import { DilanPage } from "../pages/DilanPage";

export const PublicRoutes = () => {
  return (
    <>
    
      <Routes>
        
        <Route 
          path="/" 
          element={
            <MainLayout>
              <HomePage />
            </MainLayout>
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

        <Route 
          path="/dilan" 
          element={
            <MainLayout>
              <DilanPage />
            </MainLayout>
          } 
        />



        {/* <Route path="/*" element={ <LoginPage /> } /> */}
        <Route path="/*" element={ <Navigate to="/login" /> } />
        
      </Routes>
      
    </>
  )
}
