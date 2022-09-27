import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { menu } from "../../utils/menu";
import logo from "../../assets/logo.png";
import { motion } from "framer-motion";
import { Cross as Hamburger } from "hamburger-react";
import { useState } from "react";
import { menuVariants, transition } from "../../utils/animations";
import { useWindowSize } from "../../hooks/useWindowSize";
import { MdLogout } from "react-icons/md";
import { Button } from "../";
import { adminLogout } from "../../store/authSlice";
import { useDispatch, useSelector } from "react-redux";

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { adminUser } = useSelector((state) => state.auth);

  const size = useWindowSize();
  const isMobile = size.width <= 640;

  const handleLogout = () => {
    dispatch(adminLogout(navigate("/login")));
  };

  return (
    <>
      <div className="navbar-burger-container">
        <Hamburger toggled={isOpen} toggle={setOpen} color="#31343e" />
      </div>

      <motion.nav
        className={`navbar ${isOpen && isMobile ? "navbar-mobile" : "navbar-desktop"}`}
        initial={false}
        animate={isOpen && isMobile ? "opened" : "closed"}
        variants={menuVariants}
        transitions={transition}
      >
        <div className={`navbar-links ${isOpen && isMobile && "navbar-links-mobile"}`}>
          <img src={logo} alt="navbar" className="navbar-logo" />
          {menu.map(({ id, text, icon, link }) => (
            <NavLink
              key={id}
              to={link}
              className={({ isActive }) => (isActive ? "navbar-item--active" : "navbar-item")}
            >
              <span>{icon}</span>
              <p>{text}</p>
            </NavLink>
          ))}
        </div>
        <div className="navbar-user-container">
          <Button
            onClick={() => handleLogout()}
            text="Logout"
            icon={<MdLogout />}
            style={{ width: "100%" }}
          />
          <div className="navbar-user">
            <img src={adminUser.avatar} alt="user-avatar" />
            <p>{adminUser.email}</p>
          </div>
        </div>
      </motion.nav>
    </>
  );
};
