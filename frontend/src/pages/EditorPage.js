import React from 'react';
import VoiceRecorder from '../components/VoiceRecorder';
import TextEditor from '../components/TextEditor';
import LanguageSelector from '../components/LanguageSelector';
import DownloadButton from '../components/DownloadButton';

function EditorPage() {
  return (
    <div className="editor-page">
      <LanguageSelector />
      <VoiceRecorder />
      <TextEditor />
      <DownloadButton />
    </div>
  );
}

export default EditorPage;
