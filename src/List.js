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
    // listItem.edit === "true";
    console.log("listItem.edit", listItem.edit);
    console.log("this is e.target.value", e.target.value)
    // setList(listCopy);
    // need index of item
    // edit task to be new value
    // update array with new object
    // change edit boolean

  };

  const editListItem = (listItem) => {
    // let itemIndex = listCopy.findIndex(listItem)
    // console.log('listItem', listItem)

    // const index = list.findIndex((listItem));

    // console.log('index', index)

    // listCopy[index].edit = "true";

    const newArr = list.map((listItem) => {
      if (listItem.id === listItem) {
        return {...listItem, edit: true};
      }

    setList(listCopy);
    });
    console.log('list', list)

    
    // listItem.edit === true;
    // listCopy.forEach((listItem) => {
    //   listItem.edit = true;
    // }); 

    // const editTrue = { edit: true }

    // listCopy.map((listItem) => 
    //   listItem.id === listItem.id ? {...listItem, ...editTrue} : listItem
    // );
    // setList(listCopy)
    // console.log('this runs')
    // console.log('listItem2', listItem)
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
        {listItem.edit === false ? (
          <span>{listItem.task}</span>
        ) : (
          <input
            // listItem being passed in as a parameter to onChange makes its value undefined
            // onChange={(e, listItem) => handleEdit(e, listItem)}
            onChange={(e) => handleEdit(e, listItem)}
            value={listItem.task}
          />
        )}

        <button onClick={() => editListItem(listItem)} className="editButton">
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
