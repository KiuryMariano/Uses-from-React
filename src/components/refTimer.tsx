import { useState, useRef, useEffect } from "react";
import { containerStyle, buttonGroupStyle } from "../components/Layout";

const TimerPausavel = () => {
  const [segundos, setSegundos] = useState(0);
  const [ativo, setAtivo] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (ativo) {
      timerRef.current = setInterval(() => {
        setSegundos((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [ativo]);

  const pausarOuRetomar = () => {
    setAtivo((prev) => !prev);
  };

  const parar = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setAtivo(false);
    setSegundos(0);
  };

  return (
    <div style={containerStyle}>
      <h2>⏯️ Exemplo de useRef: Timer Pausável</h2>
      <p style={{ fontSize: "1.25rem" }}>
        Tempo: <strong>{segundos}</strong> segundos
      </p>
      <div style={buttonGroupStyle}>
        <button onClick={pausarOuRetomar}>
          {ativo ? "⏸️ Pausar" : segundos > 0 ? "▶️ Retomar" : "🟢 Iniciar"}
        </button>
        <button onClick={parar}>⏹️ Parar</button>
      </div>
    </div>
  );
};

export default TimerPausavel;
