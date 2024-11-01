import React, { useEffect, useState } from 'react';

const VoiceRecorder = () => {
  const [recording, setRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    // Check for SpeechRecognition support
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (SpeechRecognition) {
      const rec = new SpeechRecognition();
      rec.continuous = false; // Set to true if you want continuous speech recognition
      rec.interimResults = false; // Set to true if you want interim results

      rec.onresult = (event) => {
        const last = event.results.length - 1;
        const result = event.results[last][0].transcript;
        setTranscript((prev) => prev + result + ' '); // Append the result
      };

      rec.onerror = (event) => {
        console.error('Error occurred in recognition: ', event.error);
      };

      rec.onend = () => {
        console.log('Speech recognition service disconnected');
      };

      setRecognition(rec);
    } else {
      alert('Your browser does not support speech recognition. Please use Google Chrome or Microsoft Edge.');
    }
  }, []);

  const startRecording = () => {
    if (recognition) {
      setRecording(true);
      recognition.start();
    }
  };

  const stopRecording = () => {
    if (recognition) {
      setRecording(false);
      recognition.stop();
    }
  };

  return (
    <div>
      <h2>Voice Recorder</h2>
      <button onClick={recording ? stopRecording : startRecording}>
        {recording ? 'Stop Recording' : 'Start Recording'}
      </button>
      <p>Transcript: {transcript}</p>
    </div>
  );
};

export default VoiceRecorder;
