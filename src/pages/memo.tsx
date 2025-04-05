import FilteredList from "../components/memoListFiltered";
import SimpleCalculator from "../components/memoCalculator";

export function Memo() {
  return (
    <div>
      <h1>Memo</h1>
      <SimpleCalculator/>
      <FilteredList/>
    </div>
  );
}
