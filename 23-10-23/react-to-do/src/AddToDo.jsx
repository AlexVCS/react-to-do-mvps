import { useState, useContext } from "react";
import { ListContext } from "./ListContext";

const AddToDo = () => {
  const [listItem, setListItem] = useState([])
  const list = useContext(ListContext);


  const handleTaskChange = (e) => {
    const task = e.target.value;
    const clone = structuredClone(listItem);
    clone.task = task
    console.log('this is the clone', clone)
    setListItem(clone)
    // clone[id].task = task;
    // setListItem(clone);
    // console.log("this is the task", task);
  };

  return (
    <div>
      <input
        onChange={(e) => handleTaskChange(e)}
        placeholder="Add to do"
        type="text"
      />
      <button>Add</button>
    </div>
  );
}

export default AddToDo;