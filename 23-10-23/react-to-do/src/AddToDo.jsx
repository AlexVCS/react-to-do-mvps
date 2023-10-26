import { useContext } from "react";
import { TaskContext } from "./TaskContext";

const AddToDo = () => {
  // const item = 
  const [item, setItem] = useContext(TaskContext)



  return (
    <div>
      <input placeholder="Add to do" type="text" />
      <button onClick={(e) => setItem(e.target.value)}>Add</button>
    </div>
  );
}

export default AddToDo;