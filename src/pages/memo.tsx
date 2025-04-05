import FilteredList from "../components/memoListFiltered";
import SimpleCalculator from "../components/memoCalculator";

export function Memo() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>⚡ Praticando useMemo</h2>
      <SimpleCalculator />
      <FilteredList />
    </div>
  );
}