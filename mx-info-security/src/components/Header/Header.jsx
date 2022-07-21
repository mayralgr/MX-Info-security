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
import { useMenu } from "../../contexts/MenuContext";

const Header = () => {
  const menuIconClick = () => {
    dispatch({type: 'change',})
  };
  const {state, dispatch} = useMenu();
  return (
    <>
      <div id="header">
        <ProSidebar collapsed={!state.open}>
          <SidebarHeader>
            <div className="logotext">
              <p>{!state.open ? "" : "MX Security"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {!state.open ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
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
              <MenuItem icon={<FaSitemap />}>
              <NavLink
                  to="/denuncia"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >Denuncia!
                </NavLink>
                </MenuItem>
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
