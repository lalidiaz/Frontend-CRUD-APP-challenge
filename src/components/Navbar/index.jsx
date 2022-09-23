import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { menu } from "../../utils/menu";

export const Navbar = () => {
  return (
    <nav className="navbar">
      {menu.map(({ id, icon, text, link }) => (
        <NavLink
          key={id}
          to={link}
          className={({ isActive }) => (isActive ? "navbar-item--active" : "navbar-item")}
        >
          {icon}
          <span>{text}</span>
        </NavLink>
      ))}
    </nav>
  );
};
