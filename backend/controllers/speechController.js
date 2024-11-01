const speechService = require('../services/speechService');

exports.convertSpeechToText = async (req, res) => {
  const { audioContent, languageCode } = req.body;

  try {
    const transcript = await speechService.convertSpeechToText(audioContent, languageCode);
    res.json({ transcript });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
