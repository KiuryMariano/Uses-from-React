import { Link, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-link">🏠 Início</Link>
          <Link to="/state" className="nav-link">🧠 useState</Link>
          <Link to="/effect" className="nav-link">⏱️ useEffect</Link>
          <Link to="/memo" className="nav-link">⚡ useMemo</Link>
          <Link to="/ref" className="nav-link">🔍 useRef</Link>
        </div>
      </nav>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}