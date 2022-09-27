import "./Layout.css";
import { Header, Navbar } from "../";

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />

      <div className="layout-wrapper">
        <Header title="Users" />

        {children}
      </div>
    </>
  );
};
