import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  const addTask = () => {
    if (!text) return alert("Enter a task");
    setTasks([...tasks, { text, done: false }]);
    setText("");
  };

  const markDone = (i) => {
    const updated = [...tasks];
    updated[i].done = true;
    setTasks(updated);
  };

  return (
    <div className="App">
      <h1>To-Do Manager</h1>

      <input
        placeholder="Enter your task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTask}>Add</button>

      <h3>Pending Tasks</h3>
      {tasks.filter(t => !t.done).map((t, i) => (
        <p key={i}>
          {t.text}{" "}
          <button onClick={() => markDone(i)}>Complete</button>
        </p>
      ))}

      <h3>Completed Tasks</h3>
      {tasks.filter(t => t.done).map((t, i) => (
        <p key={i}>{t.text}</p>
      ))}
    </div>
  );
}

export default App;

