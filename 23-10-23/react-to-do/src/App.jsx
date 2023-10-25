import './App.css'
import AddToDo from "./AddToDo";
import List from "./List"
import { useState } from 'react';

function App() {
  const [toDos, setToDos] = useState([])

  return <>
  <h1 className="text-2xl">To Do</h1>
  <AddToDo />
  <List toDos={toDos} />
  </>;
}

export default App
