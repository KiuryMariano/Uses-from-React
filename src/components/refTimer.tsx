import  { useState, useRef, useEffect } from 'react';

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
    <div>
      <h2>Timer: {segundos}s</h2>
      <button onClick={pausarOuRetomar}>
        {ativo ? 'Pausar' : segundos > 0 ? 'Retomar' : 'Iniciar'}
      </button>
      <button onClick={parar} style={{ marginLeft: '10px' }}>
        Parar
      </button>
    </div>
  );
};

export default TimerPausavel;
