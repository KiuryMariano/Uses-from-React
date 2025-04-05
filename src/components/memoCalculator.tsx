import { useState, useMemo } from 'react';

const SimpleCalculator = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operacao, setOperacao] = useState<string>('+');

  const resultado = useMemo(() => {
    console.log('Calculando resultado...');
    switch (operacao) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        return num2 !== 0 ? num1 / num2 : 'Erro: divisão por zero';
      default:
        return 0;
    }
  }, [num1, num2, operacao]);

  return (
    <div>
      <h2>Calculadora Simples Até Demais</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(parseFloat(e.target.value))}
        placeholder="Número 1"
      />
      <select value={operacao} onChange={(e) => setOperacao(e.target.value)}>
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
      />
      <p>Resultado: <strong>{resultado}</strong></p>
    </div>
  );
};

export default SimpleCalculator;
