import './App.css'
import AddToDo from "./AddToDo";
import List from "./List"
import { useState } from 'react';
import { TaskContext } from './TaskContext';

function App() {
  const [task, setTask] = useState("");

  
  return (
  <TaskContext.Provider value={[task, setTask]}>
      <h1 className="text-2xl">To Do</h1>
      <AddToDo />
      <List />
  </TaskContext.Provider>
  )
}

export default App
