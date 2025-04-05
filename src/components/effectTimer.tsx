import { useState, useEffect } from 'react';

const TimerSimples = () => {
  const [tempoRestante, setTempoRestante] = useState(10); // Começa com 10 segundos

  useEffect(() => {

    console.log('🟢 Componente montado');

    // Se o tempo acabar, não faz mais nada
    if (tempoRestante <= 0) return;

    // Cria o timer que reduz o tempo a cada 1 segundo
    const intervalo = setInterval(() => {
      setTempoRestante((tempo) => tempo - 1);
    }, 1000);

    // Função de limpeza que roda ao desmontar o componente ou mudar tempoRestante
    return () => {
      console.log('🧹 Componente desmontado ou tempo atualizado');
      clearInterval(intervalo);
    };
  }, [tempoRestante]); // Executa toda vez que o tempo muda

  return (
    <div>
      <h2>Contador Regressivo</h2>
      <p>Tempo restante: {tempoRestante} segundos</p>
    </div>
  );
};

export default TimerSimples;