import { useEffect, useState } from "react";
import { containerStyle } from "../components/Layout";

const AmiiboList = () => {
  interface Amiibo {
    tail: string;
    name: string;
    character: string;
    image: string;
  }

  const [amiibos, setAmiibos] = useState<Amiibo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("🟢 Componente AmiiboList montado");

    fetch("https://www.amiiboapi.com/api/amiibo/")
      .then((response) => response.json())
      .then((data) => {
        setAmiibos(data.amiibo);
        setLoading(false);
      })
      .catch((error) => {
        console.error("❌ Erro ao buscar dados da API:", error);
        setLoading(false);
      });

    return () => {
      console.log("🔴 Componente AmiiboList desmontado");
    };
  }, []);

  return (
    <div style={containerStyle}>
      <h2>🎮 Exemplo de useEffect: Lista de Amiibos</h2>
      {loading ? (
        <p>Carregando dados...</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {amiibos.slice(0, 20).map((item) => (
            <li
              key={item.tail}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "8px 0",
                borderBottom: "1px solid #ddd",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                width="60"
                style={{ borderRadius: "8px" }}
              />
              <div>
                <strong>{item.name}</strong> <br />
                <span style={{ color: "#555" }}>({item.character})</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AmiiboList;
