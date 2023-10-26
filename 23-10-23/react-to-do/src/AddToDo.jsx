// import {  useContext } from "react";
// import { TaskContext } from "./TaskContext";

const AddToDo = () => {
  // const item = useContext(TaskContext)


  // const updateTitle = (e) => {
  //   if (e.target.value.length > 0) {
  //     setTask(e.target.value)
  //   }
  // }

  return (
    <div>
      <input placeholder="Add to do" type="text" />
      <button onClick={(e) => setTask(e.target.value)}>Add</button>
    </div>
  );
}

export default AddToDo;