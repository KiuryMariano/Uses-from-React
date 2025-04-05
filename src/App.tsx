import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { State } from './pages/state';
import { Effect } from './pages/effect';
import { Memo } from "./pages/memo";
import { Ref } from "./pages/ref";
import { Layout } from "./components/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="state" element={<State />} />
          <Route path="effect" element={<Effect />} />
          <Route path="memo" element={<Memo />} />
          <Route path="ref" element={<Ref />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
