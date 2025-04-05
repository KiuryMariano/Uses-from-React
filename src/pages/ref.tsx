import FormularioComFoco from '../components/refInput';
import TimerPausavel from '../components/refTimer';

export function Ref() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>🔍 Praticando useRef</h2>
      <FormularioComFoco />
      <TimerPausavel />
    </div>
  );
}
