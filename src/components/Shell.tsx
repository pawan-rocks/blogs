import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@tantuui/react";
import ScrollManager from "./ScrollManager";
import Sidebar from "./Sidebar";
import RightSidebar from "./RightSidebar";

function Shell() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Box className="app-shell">
      <Box className="app-layout">
        <ScrollManager />
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <Box className="app-main-shell">
          <button type="button" className="app-menu-button tui-focus-ring" onClick={() => setSidebarOpen((isOpen) => !isOpen)} aria-label="Toggle section navigation" aria-expanded={sidebarOpen}>{sidebarOpen ? "×" : "☰"}</button>
          <main><Outlet /></main>
        </Box>
        <RightSidebar />
      </Box>
    </Box>
  );
}

export default Shell;
