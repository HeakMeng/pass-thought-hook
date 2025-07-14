import React, { useEffect } from 'react';

export function Thought({ thought, removeThought }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      removeThought(thought.id);
    }, thought.expiresAt - Date.now());

    return () => clearTimeout(timer);
  }, [thought, removeThought]);

  const handleRemoveClick = () => {
    removeThought(thought.id);
  };
  
  return (
    <li className="Thought">
      <button
        aria-label="Remove thought"
        className="remove-button"
        onClick={handleRemoveClick}
      >
        &times;
      </button>
      <div className="text">{thought.text}</div>
    </li>
  );
}