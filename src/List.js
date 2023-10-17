import React, { useState } from 'react';

export default function List({ newItem, setNewItem }) {
  const testData = [
    {
      task: 'eat',
      id: 1,
      edit: false,
    },
    {
      task: 'walk',
      id: 2,
      edit: false,
    },
    {
      task: 'shop',
      id: 3,
      edit: false,
    }
  ];

  const [list, setList] = useState(testData);
  
  let listCopy = [...list];

  const appendToList = (newItem) => {
    listCopy.push(newItem);
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

  const toDoList = list.map((listItem, index) => {
    return (
      <div key={listItem.id}>
        {listItem.edit === false ? (
          <>
            <span>{listItem.task}</span>
            <button
              onClick={() => editListItem(index)}
              className="editButton"
            >
              Edit
            </button>
          </>
        ) : (
          <>
            <input
              // listItem being passed in as a parameter to onChange makes its value undefined
              // onChange={(e, listItem) => handleEdit(e, listItem)}
              onChange={(e) => handleEdit(e, index)}
              value={listItem.task}
            />
            <button
              onClick={() => updateListItem(index)}
              className="editButton"
            >
              Update
            </button>
          </>
        )}

        <button onClick={() => removeFromList(listItem)}>Delete</button>
      </div>
    );
  });
  return (
    <>
      <button onClick={() => appendToList(newItem)}>Add</button>
      <ul>{toDoList}</ul>
    </>
  );
}
