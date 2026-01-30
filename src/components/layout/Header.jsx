const Header = ({ toggleSidebar, sidebarOpen }) => {
  return (
    <header className="header">
      <button
        className="sidebar-toggle"
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        <span className="sidebar-toggle-icon" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="5" r="2" fill="currentColor" />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
            <circle cx="12" cy="19" r="2" fill="currentColor" />
          </svg>
        </span>
      </button>

      <h1>Filup-Docs</h1>
    </header>
  );
};

export default Header;
