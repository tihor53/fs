import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("Normal");
  const [date, setDate] = useState("");

  const addTask = () => {
    if (!text || !date) {
      alert("Enter task and select date!");
      return;
    }
    const newTask = { text, priority, date, done: false };
    setTasks([...tasks, newTask]);
    setText("");
    setPriority("Normal");
    setDate("");
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
        type="text"
        placeholder="Enter task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option>High</option>
        <option>Normal</option>
        <option>Low</option>
      </select>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={addTask}>Add</button>

      <h3>Pending Tasks</h3>
      {tasks.filter(t => !t.done).map((t, i) => (
        <p key={i}>
          {t.text} — <b>{t.priority}</b> — {t.date}{" "}
          <button onClick={() => markDone(i)}>Complete</button>
        </p>
      ))}

      <h3>Completed Tasks</h3>
      {tasks.filter(t => t.done).map((t, i) => (
        <p key={i}>
          ✅ {t.text} — <b>{t.priority}</b> — {t.date}
        </p>
      ))}
    </div>
  );
}

export default App;
