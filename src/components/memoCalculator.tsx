import { useState, useMemo } from "react";
import {
  containerStyle,
  inputStyle,
} from "../components/Layout";

const SimpleCalculator = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operacao, setOperacao] = useState<string>("+");

  const resultado = useMemo(() => {
    console.log("Calculando resultado...");
    switch (operacao) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num2 !== 0 ? num1 / num2 : "Erro: divisão por zero";
      default:
        return 0;
    }
  }, [num1, num2, operacao]);

  return (
    <div style={containerStyle}>
      <h2>🧮 Exemplo de useMemo: Calculadora</h2>

      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: "12px",
        }}
      >
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(parseFloat(e.target.value))}
          placeholder="Número 1"
          style={inputStyle}
        />
        <select
          value={operacao}
          onChange={(e) => setOperacao(e.target.value)}
          style={{
            ...inputStyle,
            width: "70px",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          <option value="+">+</option>
          <option value="-">−</option>
          <option value="*">×</option>
          <option value="/">÷</option>
        </select>
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(parseFloat(e.target.value))}
          placeholder="Número 2"
          style={inputStyle}
        />
      </div>

      <p style={{ fontSize: "1.25rem" }}>
        Resultado: <strong>{resultado}</strong>
      </p>
    </div>
  );
};

export default SimpleCalculator;
