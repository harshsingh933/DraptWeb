export const validateText = (text) => {
    if (!text || text.trim() === '') {
      return 'Text cannot be empty.';
    }
    return null; // Return null if valid
  };
  