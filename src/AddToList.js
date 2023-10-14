import React, { useState } from 'react';
import List from './List.js';

export default function AddToList() {
  const [newItem, setNewItem] = useState('');

  const handleChange = (e) => {
    const input = e.target.value;
    setNewItem(input);
  };

  return (
    <>
      <input
        value={newItem}
        onChange={(e) => handleChange(e)}
        placeholder="Add an item to the list"
      />
      <List newItem={newItem} setNewItem={setNewItem} />
    </>
  );
}
