import React from 'react';

function TodoItem({ todo, onDelete }) {
  return (
    <li>
      {todo} <button onClick={onDelete}>Delete</button>
    </li>
  );
}

export default TodoItem;