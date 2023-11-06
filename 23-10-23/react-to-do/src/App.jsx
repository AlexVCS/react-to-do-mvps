import './App.css'
import AddTask from './AddTask';
import TaskList from './TaskList';
import {ListProvider} from "./ListContext";

function App() {
  return (
  <ListProvider>
    <h1>To Do List</h1>
    <AddTask />
    <TaskList />
  </ListProvider>
  )
}

export default App
