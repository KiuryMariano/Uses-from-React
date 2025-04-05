import { useRef, useEffect } from "react";
import {
  containerStyle,
  inputStyle,
  buttonGroupStyle,
} from "../components/Layout";

const FormularioComFoco = () => {
  const nomeRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (nomeRef.current) {
      nomeRef.current.focus();
    }
  }, []);

  return (
    <div style={containerStyle}>
      <h2>🧾 Exemplo de useRef: Formulário com Foco Automático</h2>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          marginTop: "12px",
        }}
      >
        <div>
          <label>Nome:</label>
          <br />
          <input
            type="text"
            ref={nomeRef}
            placeholder="Digite seu nome"
            style={inputStyle}
          />
        </div>
        <div>
          <label>Email:</label>
          <br />
          <input
            type="email"
            placeholder="Digite seu email"
            style={inputStyle}
          />
        </div>
        <div style={buttonGroupStyle}>
          <button type="submit">📩 Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default FormularioComFoco;
