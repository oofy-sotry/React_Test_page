import React from 'react';
import { observer } from 'mobx-react-lite';
import styled from "styled-components";
import views from './views';


const ViewHeader = views.Header;
const ViewSidebar = views.Sidebar;
const ViewSection = views.Section;

const Ddiv = styled.div`
  display: flex;
`

const App = observer(()=>{
  return(
    <div>
    <ViewHeader />
    <Ddiv>
    <ViewSidebar />
    <ViewSection />
    </Ddiv>
    </div>
  )
})

export default App;
