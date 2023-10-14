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
  ];

  const [list, setList] = useState(testData);
  const [editItem, setEditItem] = useState(false);
  const [editButton, setEditButton] = useState('Edit');

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

  const handleEdits = (e, listItem) => {
    setList(listCopy);
  };

  const editListItem = (listItem) => {
    console.log('this is the index', listItem.id);
    setEditItem(!editItem);
    // setEditButton('Done');
    // this update should set the list to the updated item after editing
    // const update = listCopy.map((listItem) =>
    //   listItem.id === updateItem.id ? updateItem : listItem
    // );
    // setList(update);
  };

  const toDoList = list.map((listItem) => {
    console.log('this is the list', list);
    return (
      <div>
        <input
          onChange={(e, updateItem) => handleEdits(e, updateItem)}
          key={listItem.id}
          value={listItem.task}
        />
        <button
          onClick={(listItem) => editListItem(listItem)}
          className="editButton"
        >
          {editButton}
        </button>
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
