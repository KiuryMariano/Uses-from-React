import { useState, useMemo } from "react";

const FilteredList = () => {

  const [filtro, setFiltro] = useState("");
  const lista = [
    'Toyota', 'Honda', 'Ford', 'Chevrolet', 'Volkswagen',
    'BMW', 'Mercedes-Benz', 'Audi', 'Hyundai', 'Nissan',
    'Kia', 'Peugeot', 'Renault', 'Fiat', 'Jeep'
  ];

  // Otimização com useMemo
  const filtering = useMemo(() => {
    console.log("Filtrando lista...");

    return lista.filter((item) =>
      item.toLowerCase().includes(filtro.toLowerCase())
    );
  }, [filtro, lista]);

  return (
    <div>
      <h2>Lista Filtrada</h2>
      <input
        type="text"
        placeholder="Digite para filtrar"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />
      <ul>
        {filtering.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilteredList;