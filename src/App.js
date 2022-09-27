import { Routes, Route } from "react-router-dom";
import { NoMatch, Login, Users } from "./pages";
import { Layout, ProtectedRoutes, UserDetails, PublicRoutes } from "./components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <div className="app">
        <Routes>
          {/* Private Routes */}
          <Route path="/" element={<ProtectedRoutes />}>
            <Route
              index
              path="/users"
              element={
                <Layout>
                  <Users />
                </Layout>
              }
            />
            <Route
              index
              path="/users/:id"
              element={
                <Layout>
                  <UserDetails />
                </Layout>
              }
            />
            <Route path="*" element={<NoMatch />} />
          </Route>

          {/* Public Routes */}
          <Route path="/" element={<PublicRoutes />}>
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </div>
      <ToastContainer />
    </>
  );
};

export default App;
