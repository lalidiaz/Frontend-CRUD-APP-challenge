import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProtectedRoutes = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  //Render child component route = render Outlet component from React Router
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};
