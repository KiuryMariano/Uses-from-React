import { useState } from "react";
import { containerStyle, buttonGroupStyle, inputStyle } from "../components/Layout";

export function ArrayState() {
  const [tasks, setTasks] = useState<string[]>([]);

  const [input, setInput] = useState("");

  function addTasks() {
    setTasks([...tasks, input]);
    setInput("");
  }

  return (
    <div style={containerStyle}>
      <h2>📝 Exemplo de useState: Lista de tarefas</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Digite a tarefa..."
        className="border p-2 rounded"
        style={inputStyle}
      />
      <div style={buttonGroupStyle}>
        <button onClick={addTasks}>Adicionar a lista</button>
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
