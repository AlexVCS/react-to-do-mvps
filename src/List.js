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

  const handleEdit = (e, listItem) => {
    console.log("this is e.target.value", e.target.value)
    // setList(listCopy);
    // need index of item
    // edit task to be new value
    // update array with new object
    // change edit boolean

  };

  const editListItem = (listItem) => {
    // console.log('this is the index', listItem.id);
    // setEditItem(!editItem);
    // setEditButton('Done');
    // this update should set the list to the updated item after editing
    // const update = listCopy.map((listItem) =>
    //   listItem.id === updateItem.id ? updateItem : listItem
    // );
    // setList(update);
  };

  const toDoList = list.map((listItem) => {
    // console.log('this is the list', list);
    return (
      <div key={listItem.id}>
        {listItem.edit ==='false' ?
        <input
            // listItem being passed in as a parameter to onChange makes its value undefined
            // onChange={(e, listItem) => handleEdit(e, listItem)}
            onChange={(e) => handleEdit(e, listItem)}

            value={listItem.task}
          />
          :
          <span>{listItem.task}</span>}
          
          
    
        <button
          onClick={(listItem) => editListItem(listItem)}
          className="editButton"
        >
          Edit
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
