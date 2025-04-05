import { useState, useMemo } from "react";
import { containerStyle, inputStyle } from "../components/Layout";

const FilteredList = () => {
  const [filtro, setFiltro] = useState("");

  const lista = [
    "Toyota",
    "Honda",
    "Ford",
    "Chevrolet",
    "Volkswagen",
    "BMW",
    "Mercedes-Benz",
    "Audi",
    "Hyundai",
    "Nissan",
    "Kia",
    "Peugeot",
    "Renault",
    "Fiat",
    "Jeep",
  ];

  // Otimização com useMemo
  const filtering = useMemo(() => {
    console.log("Filtrando lista...");
    return lista.filter((item) =>
      item.toLowerCase().includes(filtro.toLowerCase())
    );
  }, [filtro, lista]);

  return (
    <div style={containerStyle}>
      <h2>🔍 Exemplo de useMemo: Lista Filtrada</h2>
      <input
        type="text"
        placeholder="Digite para filtrar"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        style={inputStyle}
      />
      <ul style={{ listStyle: "none", padding: 0, marginTop: "12px" }}>
        {filtering.map((item, index) => (
          <li
            key={index}
            style={{
              padding: "6px 0",
              borderBottom: "1px solid #ddd",
              color: "#333",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilteredList;
