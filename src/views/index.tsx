import React from 'react';

const views = {
  Header: React.lazy(() => import("./Header")),
  Sidebar: React.lazy(() => import("./Sidebar")),
  Section: React.lazy(() => import("./Section")),
}

export default views;