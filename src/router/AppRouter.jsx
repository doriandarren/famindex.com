import { Route, Routes } from "react-router";
import { AuthRoutes } from "../modules/auth/routes/AuthRoutes";
import { DashboardRoutes } from "../modules/dashboard/routes/DashboardRoutes";
import { PublicRoutes } from "../modules/public/routes/PublicRoutes";


export const AppRouter = () => {
  return (
    <Routes>
    
      {/* Routes Public */}
      <Route path="/*" element={ <PublicRoutes /> } />
      
      {/* Login y Register */}
      <Route path="auth/*" element={ <AuthRoutes /> } />


      {/* Routes Private */}
      <Route path="/admin/*" element={ <DashboardRoutes /> } />
      
    </Routes>
  )
}
