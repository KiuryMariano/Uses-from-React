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

// Estilos inline simples
export const containerStyle = {
  border: "1px solid #ddd",
  borderRadius: "8px",
  padding: "20px",
  marginBottom: "20px",
  textAlign: "center" as const,
};

export const buttonGroupStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "10px",
  marginTop: "10px"
};

export const inputStyle = {
  padding: "10px",
  fontSize: "1rem",
  borderRadius: "6px",
  border: "1px solid #ccc",
  width: "100%",
  maxWidth: "300px",
  marginBottom: "12px"
};