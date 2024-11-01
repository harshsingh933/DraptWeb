import React, { useState } from 'react';

function LanguageSelector() {
  const [language, setLanguage] = useState('English');

  const handleChange = (event) => {
    setLanguage(event.target.value);
    // Handle language change logic here
  };

  return (
    <div>
      <h2>Select Language</h2>
      <select value={language} onChange={handleChange}>
        <option value="English">English</option>
        <option value="Hindi">Hindi</option>
      </select>
    </div>
  );
}

export default LanguageSelector;
