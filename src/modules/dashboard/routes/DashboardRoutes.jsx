import { Navigate, Route, Routes } from "react-router";
import { DashboardPage } from "../pages/DashboardPage";
import { TeamPage, TeamCreatePage } from "../pages";
import { ProfilePage } from "../../auth/pages/ProfilePage";
import { CustomerPage } from "../pages/CustomerPage";


export const DashboardRoutes = () => {
  return (
    <Routes>
      
      <Route path="/dashboard" element={ <DashboardPage /> } />
      

      <Route path="/team" element={ <TeamPage /> } />
      <Route path="/team/create" element={ <TeamCreatePage /> } />

      <Route path="/profile" element={ <ProfilePage /> } />
      <Route path="/customers" element={ <CustomerPage /> } />


      <Route path="/*" element={ <Navigate to="/auth/dashboard" /> } />
      
    </Routes>
  )
}

