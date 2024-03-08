import React from 'react';
import { observer } from "mobx-react-lite";
import styled from "styled-components";


const Sectiondiv = styled.div`
  width: 1600px;
  height: 800px;
  background-color: #D9D9D9;
  border: 1px solid black;
  margin: 0 auto;
  margin-top: 25px;
`;

interface SectionProps {
  title?: string;
  children?: React.ReactNode;  // children 속성 추가
}

const Section = observer<SectionProps>(({ children }) => {
  return (
    <Sectiondiv>
      {children}
    </Sectiondiv>
  );
});

export default Section;
