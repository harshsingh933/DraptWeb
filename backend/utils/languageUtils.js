exports.getLanguageCode = (lang) => {
    switch (lang) {
      case 'hi':
        return 'hi-IN'; // Hindi
      case 'en':
      default:
        return 'en-US'; // English
    }
  };
  