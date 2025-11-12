import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("top");
  const [deadline, setDeadline] = useState("");

  const addTask = () => {
    if (!task.trim() || !deadline) {
      alert("Please enter a task and select a valid deadline.");
      return;
    }

    const selectedDate = new Date(deadline);
    if (selectedDate <= new Date()) {
      alert("Please select a future date for the deadline.");
      return;
    }

    setTasks([...tasks, { task, priority, deadline, done: false }]);
    setTask("");
    setPriority("top");
    setDeadline("");
  };

  const markDone = (id) => {
    setTasks(tasks.map((t, index) =>
      index === id ? { ...t, done: true } : t
    ));
  };

  return (
    <div className="App">
      <header>
        <h1>Task Scheduler</h1>
      </header>
      <main>
        <div className="task-form">
          <input
            type="text"
            placeholder="Enter task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}>
            <option value="top">Top Priority</option>
            <option value="middle">Middle Priority</option>
            <option value="low">Less Priority</option>
          </select>
          <input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
          <button onClick={addTask}>Add Task</button>
        </div>
        <h2>Upcoming Tasks</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Task Name</th>
              <th>Priority</th>
              <th>Deadline</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.filter(t => !t.done).map((t, index) => (
              <tr key={index}>
                <td>{t.task}</td>
                <td>{t.priority}</td>
                <td>{t.deadline}</td>
                <td>
                  {!t.done && (
                    <button onClick={() => markDone(index)}>Mark Done</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2>Completed Tasks</h2>
        <div className="completed-task">
          {tasks.filter(t => t.done).map((ct, index) => (
            <div key={index}>{ct.task} - {ct.priority} - {ct.deadline}</div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
