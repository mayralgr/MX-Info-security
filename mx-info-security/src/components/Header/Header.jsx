import { useState } from "react";

import { NavLink } from "react-router-dom";

import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { FaInfo, FaSitemap } from "react-icons/fa";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { BiMap } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";

import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";

const Header = () => {
  const [menuCollapse, setMenuCollapse] = useState(false);

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              <p>{menuCollapse ? "" : "MX Security"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem icon={<BiMap />}>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  Mapa
                </NavLink>
              </MenuItem>
              <MenuItem icon={<FaInfo />}>
                <NavLink
                  to="/delitos"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  Delitos
                </NavLink>
              </MenuItem>
              <MenuItem icon={<FaSitemap />}>Sitios de Interes</MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<BsFillPersonFill />}>
                Mayra Lucero Garcia Ramirez
              </MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Header;
