// services/speechService.js

const { SpeechClient } = require('@google-cloud/speech');

const client = new SpeechClient();

const convertSpeechToText = async (audioContent, languageCode) => {
  const request = {
    audio: {
      content: audioContent,
    },
    config: {
      encoding: 'LINEAR16',
      sampleRateHertz: 16000,
      languageCode: languageCode,
    },
  };

  try {
    const [response] = await client.recognize(request);
    const transcript = response.results
      .map(result => result.alternatives[0].transcript)
      .join('\n');
    return transcript;
  } catch (error) {
    throw new Error(`Speech recognition failed: ${error.message}`);
  }
};

module.exports = { convertSpeechToText };
