import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './pages/home';
import { State } from './pages/state';
import { Effect } from './pages/effect';
import { Memo } from "./pages/memo";
import { Ref } from "./pages/ref";
import { CicloVida } from "./pages/cicloVida";

function App() {
  return (
    <Router>
      <Home></Home>
      <Routes>
        <Route path="/state" element={<State />} />
        <Route path="/effect" element={<Effect />} />
        <Route path="/memo" element={<Memo />} />
        <Route path="/ref" element={<Ref />} />
        <Route path="/ciclo" element={<CicloVida />} />
      </Routes>
    </Router>
  )
}

export default App;
