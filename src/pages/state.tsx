import { CountState } from "../components/stateCount";
import { ArrayState } from "../components/stateArray";

export function State() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>🧠 Praticando useState</h2>
      <div style={{ marginBottom: "30px" }}>
        <CountState />
      </div>
      <ArrayState />
    </div>
  );
}
