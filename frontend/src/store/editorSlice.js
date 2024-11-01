import { createSlice } from '@reduxjs/toolkit';

const editorSlice = createSlice({
  name: 'editor',
  initialState: {
    text: '',
    language: 'English',
  },
  reducers: {
    setText: (state, action) => {
      state.text = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setText, setLanguage } = editorSlice.actions;

export default editorSlice.reducer;
