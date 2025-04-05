import { useState } from "react";
import { containerStyle, buttonGroupStyle } from "../components/Layout";

export function CountState() {
  // Declarando estado inicial do contador
  const [count, setCount] = useState(0);

  // Função para incrementar
  function increment() {
    setCount(prev => prev + 1);
  }

  // Função para decrementar
  function decrement() {
    setCount(prev => prev - 1);
  }

  return (
    <div style={containerStyle}>
      <h2>🧮 Exemplo de useState: Contador</h2>
      <p>
        O valor atual do contador é: <strong>{count}</strong>
      </p>
      <div style={buttonGroupStyle}>
        <button onClick={increment}>➕ Incrementar</button>
        <button onClick={decrement}>➖ Decrementar</button>
      </div>
    </div>
  );
}
