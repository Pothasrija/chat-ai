import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
const Nav = styled(Link)`
  background: #15171c;
  color: white;
  height: 70px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

//this is css right at  this what back ticks you used at css also
const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 1.5rem;
  height: 70px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div>
      <Nav>
        <NavIcon to="/">
          <FaBars onClick={showSidebar} />
        </NavIcon>
      </Nav>
      <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
          <NavIcon to="/">
            <MdOutlineClose onClick={showSidebar} />
          </NavIcon>
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
        </SidebarWrap>
      </SidebarNav>
    </div>
  );
};

export default Sidebar;
