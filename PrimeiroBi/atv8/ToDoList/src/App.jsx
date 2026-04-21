import { useState } from "react";
import "./index.css";

function App() {
  const [tarefas, setTarefas] = useState([]);

  const [input, setInput] = useState("");

  function adicionarTarefa(e) {
    e.preventDefault();

    if (input.trim() === "") {
      alert("Digite uma tarefa!");
      return;
    }

    const novaTarefa = {
      id: Date.now(),
      text: input
    };

    setTarefas([...tarefas, novaTarefa]);

    setInput("");
  }

  function removerTarefa(id) {
    const novaLista = tarefas.filter((tarefa) => tarefa.id !== id);
    setTarefas(novaLista);
  }

  return (
    <div className="container">
      <h1>To-Do List</h1>

      <form onSubmit={adicionarTarefa}>
        <input
          type="text"
          placeholder="Digite uma tarefa..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button type="submit">Adicionar</button>
      </form>

      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            {tarefa.text}
            <button onClick={() => removerTarefa(tarefa.id)}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;