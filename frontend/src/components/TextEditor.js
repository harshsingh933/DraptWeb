import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setText } from '../store/editorSlice';
import Toolbar from './Toolbar';

function TextEditor() {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.editor.text);

  const handleTextChange = (e) => {
    dispatch(setText(e.target.value));
  };

  const toggleBold = () => {
    // Implement bold logic (you might want to use contentEditable)
  };

  const toggleItalic = () => {
    // Implement italic logic (you might want to use contentEditable)
  };

  const toggleUnderline = () => {
    // Implement underline logic (you might want to use contentEditable)
  };

  return (
    <div>
      <Toolbar onBold={toggleBold} onItalic={toggleItalic} onUnderline={toggleUnderline} />
      <textarea
        rows="10"
        cols="50"
        value={text}
        onChange={handleTextChange}
        placeholder="Your document text will appear here..."
      />
    </div>
  );
}

export default TextEditor;
