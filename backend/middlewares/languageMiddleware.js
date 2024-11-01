// middlewares/languageMiddleware.js

exports.languageMiddleware = (req, res, next) => {
    // Default to English
    let language = req.query.language || 'en';
  
    // Validate the language input (you can expand this for additional languages)
    if (language !== 'en' && language !== 'hi') {
      return res.status(400).json({ message: 'Invalid language code. Use "en" for English or "hi" for Hindi.' });
    }
  
    // Set the language on the request object
    req.language = language;
  
    // Proceed to the next middleware/route handler
    next();
  };
  