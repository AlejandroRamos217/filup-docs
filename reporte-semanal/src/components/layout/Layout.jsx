import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "../../styles/layout.css";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  
  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  return (
  <div className={`app ${sidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
    <Header toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

    <div className="layout-body">
      <Sidebar sidebarOpen={sidebarOpen} />
      <main className="main-content">{children}</main>
    </div>
  </div>
);

};

export default Layout;
