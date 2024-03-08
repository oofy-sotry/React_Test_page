import React from 'react';
import { observer } from "mobx-react-lite";
import styled from "styled-components";

const Hederdiv = styled.div`
  width: 100%;
  height: 162px;
  background-color: #D9D9D9;
  border: 1px solid black;
  text-align: center;
  font-size: 30px;
  display: flex;
  // align-items: center;  /* 수직 가운데 정렬 */
`;

interface HeaderProps {
  title?: string;
  children?: React.ReactNode;  // children 속성 추가
}

const Header = observer<HeaderProps>(({ children }) => {
  return (
    <Hederdiv>
      {children}  {/* 자식 컴포넌트가 여기에 들어갈 수 있습니다 */}
    </Hederdiv>
  );
});

export default Header;
