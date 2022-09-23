import "./UserOverview.css";
import { NavLink, Outlet } from "react-router-dom";
import { Card, Button, Navbar } from "../../components";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { MdAdd } from "react-icons/md";

export const UserOverview = () => {
  return (
    <>
      <Navbar />
      <div className="user-overview-wrapper">
        <header>
          <h3 className="user-overview-header-title">Users</h3>

          <div className="user-overview-header-btn-container">
            <Button
              type="text"
              text="import"
              icon={<AiOutlineCloudUpload size={20} />}
              onClick={() => console.log("click")}
            />
            <Button
              type="text"
              text="Add user"
              icon={<MdAdd size={20} />}
              color="violet"
              onClick={() => console.log("add user")}
            />
          </div>
        </header>
        <nav className="user-overview-tabs">
          <NavLink
            to="/user/list"
            className={({ isActive }) =>
              isActive ? "user-overview-tab--active" : "user-overview-tab-"
            }
          >
            List
          </NavLink>
          <NavLink
            to="/user/detail"
            className={({ isActive }) =>
              isActive ? "user-overview-tab--active" : "user-overview-tab-"
            }
          >
            Detail
          </NavLink>
        </nav>
        <section className="user-overview-cards">
          <Card />
          <Card />
          <Card />
        </section>

        <Outlet />
      </div>
    </>
  );
};
