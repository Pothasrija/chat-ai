import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  list-style: none;
  height: 50px;
  text-decoration: none;
  font-size: 18px;

  &: hover {
    background: #252832;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;
const SubMenu = ({ item }) => {
  return (
    <SidebarLink to={item.path}>
      <div>
        {item.icon}
        <SidebarLabel>{item.title}</SidebarLabel>
      </div>
    </SidebarLink>
  );
};

export default SubMenu;
