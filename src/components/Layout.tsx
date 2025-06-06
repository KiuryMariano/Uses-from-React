import { Link, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-link">
            🏠 Início
          </Link>
          <Link to="/state" className="nav-link">
            🧠 useState
          </Link>
          <Link to="/effect" className="nav-link">
            ⏱️ useEffect
          </Link>
          <Link to="/memo" className="nav-link">
            ⚡ useMemo
          </Link>
          <Link to="/ref" className="nav-link">
            🔍 useRef
          </Link>
        </div>
      </nav>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

// Estilos inline simples
const containerStyle = {
  backgroundColor: "#1e1e1e",
  color: "#f0f0f0",
  border: "1px solid #444",
  borderRadius: "8px",
  padding: "20px",
  marginBottom: "20px",
  textAlign: "center" as const,
  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)"
};

const buttonGroupStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "10px",
  marginTop: "10px"
};

const inputStyle = {
  padding: "10px",
  fontSize: "1rem",
  borderRadius: "6px",
  border: "1px solid #555",
  backgroundColor: "#2b2b2b",
  color: "#f0f0f0",
  width: "100%",
  maxWidth: "300px",
  marginBottom: "12px"
};

// ✅ Agora exportando individualmente — compatível com Fast Refresh
export { containerStyle, buttonGroupStyle, inputStyle };
