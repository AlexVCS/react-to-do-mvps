import './App.css'
import AddToDo from "./AddToDo";
import List from "./List"
import { useContext } from 'react';
import { ListContext } from './ListContext';

function App() {
  const [list, setList] = useContext(ListContext);

  
  return (
  <ListContext.Provider value={[list]}>
      <h1 className="text-2xl">To Do</h1>
      <AddToDo />
      <List />
  </ListContext.Provider>
  )
}

export default App
