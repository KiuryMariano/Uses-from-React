import TimerSimples from "../components/effectTimer";
import AmiiboList from "../components/effectApi";

export function Effect() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>⏱️ Praticando useEffect</h2>
      <TimerSimples />
      <AmiiboList />
    </div>
  );
}
