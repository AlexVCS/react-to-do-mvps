import React, { useState } from 'react';
import List from './List.js';
import "./style.css";

export default function AddToList() {
  const [newItem, setNewItem] = useState('');

  const handleChange = (e) => {
    const input = e.target.value;
    setNewItem(input);
  };

  return (
    <div className="content">
      <input
        value={newItem}
        className="toDoInput"
        onChange={(e) => handleChange(e)}
        placeholder="Type to do"
      />
      <List newItem={newItem} setNewItem={setNewItem} />
    </div>
  );
}
