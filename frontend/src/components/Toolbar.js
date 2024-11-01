import React from 'react';

function Toolbar({ onBold, onItalic, onUnderline }) {
  return (
    <div className="toolbar">
      <button onClick={onBold}>B</button>
      <button onClick={onItalic}>I</button>
      <button onClick={onUnderline}>U</button>
    </div>
  );
}

export default Toolbar;
