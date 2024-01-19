import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  { title: "Home", path: "/", icon: <FaIcons.FaHome /> },
  { title: "Chat", path: "/chat", icon: <FaIcons.FaComments /> },
  { title: "Camera", path: "/camera", icon: <AiIcons.AiFillCamera /> },
  { title: "Secret", path: "/secret", icon: <IoIcons.IoIosLock /> },
  { title: "Settings", path: "/settings", icon: <RiIcons.RiSettings5Fill /> },
];
//hello ok