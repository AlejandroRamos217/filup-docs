const Sidebar = ({ sidebarOpen }) => {
  const handleLogout = () => {
    localStorage.removeItem("auth");
    window.location.reload();
  };

  return (
    <aside className={`sidebar ${sidebarOpen ? "" : "closed"}`}>
      <ul className="sidebar-menu">
        <li>Reporte semanal</li>
        <li>Otros reportes</li>
      </ul>

      <button className="sidebar-logout" onClick={handleLogout}>
        Cerrar sesión
      </button>
    </aside>
  );
};

export default Sidebar;
