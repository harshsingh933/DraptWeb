export const languageOptions = ['English', 'Hindi'];

export const detectLanguage = (text) => {
  // Simple detection logic (expand as necessary)
  if (/[\u0900-\u097F]/.test(text)) {
    return 'Hindi';
  }
  return 'English';
};
