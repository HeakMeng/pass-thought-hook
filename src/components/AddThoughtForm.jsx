import React, { useState } from 'react';
import { generateId, getNewExpirationTime } from '../utilities';

export function AddThoughtForm({ addThought }) {
  const [text, setText] = useState('');

  const handleTextChange = ({ target }) => {
    setText(target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.length) {
      const thought = {
        id: generateId(),
        text: text,
        expiresAt: getNewExpirationTime()
      };
      addThought(thought);
      setText('');
    }
  };

  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input 
        onChange={handleTextChange}
        value={text}
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
      />
      <input type="submit" value="Add" />
    </form>
  );
}