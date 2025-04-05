import { useState, useEffect } from "react";
import { containerStyle } from "../components/Layout";

const TimerSimples = () => {
  const [tempoRestante, setTempoRestante] = useState(10); // Começa com 10 segundos

  useEffect(() => {
    console.log("🟢 Componente montado");

    if (tempoRestante <= 0) return;

    const intervalo = setInterval(() => {
      setTempoRestante((tempo) => tempo - 1);
    }, 1000);

    return () => {
      console.log("🧹 Componente desmontado ou tempo atualizado");
      clearInterval(intervalo);
    };
  }, [tempoRestante]);

  return (
    <div style={containerStyle}>
      <h2>⏳ Exemplo de useEffect: Contador Regressivo</h2>
      <p style={{ fontSize: "1.25rem", marginTop: "10px" }}>
        Tempo restante: <strong>{tempoRestante}</strong> segundos
      </p>
    </div>
  );
};

export default TimerSimples;
