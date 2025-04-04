import { useState } from "react";

export function ArrayState() {
  const [tasks, setTasks] = useState<string[]>([]);

  const [input, setInput] = useState("");

  function addTasks() {
    setTasks([...tasks, input]);
    setInput("");
  }

  return (
    <div>
      <h2>Lista de tarefas</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Digite a tarefa..."
        className="border p-2 rounded"
      />
      <button onClick={addTasks}>Adicionar a lista</button>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ol>
    </div>
  );
}
