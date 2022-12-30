import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import TaskList from "./features/task/taskList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <TaskList />
      </header>
    </div>
  );
}

export default App;