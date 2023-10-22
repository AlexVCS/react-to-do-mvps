import React, { useState } from 'react';
import "./style.css";


export default function List({ newItem, setNewItem }) {
  const [list, setList] = useState([]);
  const [completed, setCompleted] = useState([]);
  
  let listCopy = [...list];
  let uuid = crypto.randomUUID();

  const appendToList = (newItem) => {
    listCopy.push({task: `${newItem}`, id: uuid, edit: false, complete: false});
    setList(listCopy);
    setNewItem('');
  };

  const removeFromList = (listItem, index) => {
    if (index > -1) {
      alert(`Delete ${listItem.task}?`);
      listCopy.splice(index, 1);
    }
    setList(listCopy);
  };

  const handleEdit = (e, index) => {
    const updatedTask = e.target.value
    const editedList = structuredClone(list)
    editedList[index].task = updatedTask
    setList(editedList)
  };

  const toggleItemEdit = (index) => {
    // make structuredClone of list similar to handleEdit
    // toggle state from
    const copy = structuredClone(list)
    copy[index].edit = !copy[index].edit
    setList(copy)
  };

  const markAsComplete = (listItem, index) => {
    let completedListCopy = [...completed]
    completedListCopy.push({
      task: listItem.task,
      id: uuid,
      edit: false,
      complete: true,
    });
    setCompleted(completedListCopy);
    if (index > -1) {
      alert(`You're marking ${listItem.task} complete`);
    }
    listCopy.splice(index, 1);
    setList(listCopy);
  }

  const toDoList = list.map((listItem, index) => {
    return (
      <div key={listItem.id} className="listContainer">
        {listItem.edit === false ? (
          <div className="listItem">
            <span className="task">{listItem.task}</span>
            <div className="buttons">
              <div className="editOrUpdateContainer">
                <button
                  onClick={() => toggleItemEdit(index)}
                  className="button"
                >
                  Edit
                </button>
              </div>
              <div className="buttonContainer">
                <button
                  className="button"
                  onClick={() => markAsComplete(listItem, index)}
                >
                  Complete
                </button>
                <button onClick={() => removeFromList(listItem, index)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="listItem">
            <input
              onChange={(e) => handleEdit(e, index)}
              value={listItem.task}
              className="editTaskInput"
            />
            <div className="buttons">
              <div className="editOrUpdateContainer">
                <button
                  onClick={() => toggleItemEdit(index)}
                  className="button"
                >
                  Update
                </button>
              </div>
              <div className="buttonContainer">
                <button
                  className="button"
                  onClick={() => markAsComplete(listItem, index)}
                >
                  Complete
                </button>
                <button onClick={() => removeFromList(listItem)}>Delete</button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  });

  const completedList = completed.map((completedItem) => {
          return (
            <div key={completedItem.id}>
              &#9989; <span>{completedItem.task}</span>
            </div>
          );
        })


  return (
    <>
      <button className="addButton" onClick={() => appendToList(newItem)}>Add</button>
      <div>{toDoList}</div>

      {list.length > 0 &&
        <div>{list.length} Task(s)</div>
      }
      {completed.length > 0 &&
      <div className="completedContainer">
        <h4>Completed</h4>
        <div className="completed">{completedList}</div>
      </div>
      }
    </>
  );
}
