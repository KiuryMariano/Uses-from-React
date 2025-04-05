import { useRef, useEffect } from 'react';

const FormularioComFoco = () => {
  const nomeRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Foca automaticamente no campo de nome ao carregar
    if (nomeRef.current) {
      nomeRef.current.focus();
    }
  }, []);

  return (
    <div>
      <h2>Formulário</h2>
      <form>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            ref={nomeRef}
            placeholder="Digite seu nome"
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Digite seu email"
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FormularioComFoco;
