import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export const PublicRoutes = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  return isLoggedIn ? <Navigate to="/users" /> : <Outlet />;
};
