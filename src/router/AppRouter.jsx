import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../modules/auth/routes/AuthRoutes";
import { DashboardRoutes } from "../modules/dashboard/routes/DashboardRoutes";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { startRestoreSession } from "../store/auth/thunks";
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';


export const AppRouter = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.auth);
  const isAuthenticated = status === "authenticated";
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    dispatch(startRestoreSession()).finally(() => {
      setCheckingAuth(false);
    });
  }, [dispatch]);

  if (checkingAuth) {
    return <div className="flex items-center justify-center h-screen text-xl">Cargando sesión...</div>; // Mostrar loading en lugar de redireccionar
  }

  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/auth/*" element={<PublicRoute isAuthenticated={isAuthenticated} />}>
        <Route path="*" element={<AuthRoutes />} />
      </Route>

      {/* Rutas privadas */}
      <Route path="/admin/*" element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
        <Route path="*" element={<DashboardRoutes />} />
      </Route>

      {/* Redirección global */}
      <Route path="/" element={<Navigate to={isAuthenticated ? "/admin/dashboard" : "/auth/login"} />} />
    </Routes>
  );
}
