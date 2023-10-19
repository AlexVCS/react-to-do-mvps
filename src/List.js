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

  const removeFromList = (listItem) => {
    const itemIndex = list.indexOf(listItem);
    if (itemIndex > -1) {
      alert(`Delete ${listItem.task}?`);
      listCopy.splice(itemIndex, 1);
    }
    setList(listCopy);
  };

  const handleEdit = (e, index) => {
    const updatedTask = e.target.value
    const addUpdatedTask = {...list[index], task: `${updatedTask}`}
    listCopy[index] = addUpdatedTask
    setList(listCopy)
  };

  const editListItem = (index) => {
    const makeItemEditTrue = {...list[index], edit: true };
    listCopy[index] = makeItemEditTrue;
    setList(listCopy)
  };

  const updateListItem = (index) => {
     const makeItemEditFalse = {...list[index], edit: false};
     listCopy[index] = makeItemEditFalse;
     setList(listCopy);
  }

  const markAsComplete = (listItem, index) => {
    let completedListCopy = [...completed]
    completedListCopy.push({
      task: listItem.task,
      id: uuid,
      edit: false,
      complete: true,
    });
    setCompleted(completedListCopy);
    const itemIndex = list.indexOf(listItem);
    if (itemIndex > -1) {
      alert(`You're marking ${listItem.task} complete`);
    }
    listCopy.splice(itemIndex, 1);
    setList(listCopy);

  }

  const toDoList = list.map((listItem, index) => {
    return (
      <div key={listItem.id} className="listContainer">
  {listItem.edit === false ? (
    <div className="listItem">
      <span className="task">{listItem.task}</span>
      <div class="editOrUpdateContainer">
        <button onClick={() => editListItem(index)} className="button">
          Edit
        </button>
      </div>
      <div class="buttonContainer">
        <button
          className="button"
          onClick={() => markAsComplete(listItem, index)}
        >
          Complete
        </button>
        <button onClick={() => removeFromList(listItem)}>Delete</button>
      </div>
    </div>
  ) : (
    <div className="listItem">
      <input
        onChange={(e) => handleEdit(e, index)}
        value={listItem.task}
        className="editTaskInput"
      />
      <div class="editOrUpdateContainer">
        <button onClick={() => updateListItem(index)} className="button">
          Update
        </button>
      </div>
      <div class="buttonContainer">
        <button
          className="button"
          onClick={() => markAsComplete(listItem, index)}
        >
          Complete
        </button>
        <button onClick={() => removeFromList(listItem)}>Delete</button>
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
      <button onClick={() => appendToList(newItem)}>Add</button>
      <p>{toDoList}</p>

      {list.length > 0 &&
        <div>{list.length} Task(s)</div>
      }
      {completed.length > 0 &&
      <div className="completedContainer">
        <h4>Completed</h4>
        <p className="completed">{completedList}</p>
      </div>
      }
    </>
  );
}
