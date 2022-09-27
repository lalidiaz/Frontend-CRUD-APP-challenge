import { FaUserCircle } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { BsFiles } from "react-icons/bs";
import { AiOutlinePieChart } from "react-icons/ai";
import { GoSettings } from "react-icons/go";
import { TbMessages } from "react-icons/tb";

export const menu = [
  {
    id: 1,
    icon: <HiHome />,
    text: "Home",
    link: "null",
  },
  {
    id: 2,
    icon: <FaUserCircle />,
    text: "Users",
    link: "/users",
  },
  {
    id: 3,
    icon: <BsFiles />,
    text: "Dashboard",
    link: "null",
  },
  {
    id: 4,
    icon: <AiOutlinePieChart />,
    text: "Reporting",
    link: "null",
  },
  { id: 5, icon: <AiOutlinePieChart />, text: "Notifications", link: "null" },
  { id: 6, icon: <TbMessages />, text: "Support", link: "null" },
  { id: 7, icon: <GoSettings />, text: "Settings", link: "null" },
];
