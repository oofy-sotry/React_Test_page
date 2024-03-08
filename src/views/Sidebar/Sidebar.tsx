import React from 'react';
import { observer } from "mobx-react-lite";
import styled from "styled-components";

const Sidediv = styled.div`
  width: 163px;
  height: 858px;
  background-color: #6b6a6a;
  border: 1px solid black;
  text-align: center;
`;

interface SidebarProps {
  title?: string;
  children?: React.ReactNode;  // children 속성 추가
}

const Sidebar = observer<SidebarProps>(({ children }) => {
  return (
    <Sidediv>
      {children} 
    </Sidediv>
  );
});

export default Sidebar;
