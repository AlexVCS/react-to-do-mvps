import React, { useState } from 'react';
import AddToList from './AddToList.js';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>To Do</h1>
      <AddToList />
    </div>
  );
}
