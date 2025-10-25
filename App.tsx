import React, { useState, useCallback } from 'react';
import CleanUpButton from './components/CleanUpButton';
import { formatNote } from './services/geminiService';

const INITIAL_NOTE = ``;

const App: React.FC = () => {
  const [noteText, setNoteText] = useState<string>(INITIAL_NOTE);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleCleanUp = useCallback(async () => {
    if (!noteText.trim()) {
      setError("Note is empty. There's nothing to clean up!");
      setTimeout(() => setError(null), 3000);
      return;
    }

    setIsLoading(true);
    setError(null);
    try {
      const formattedText = await formatNote(noteText);
      setNoteText(formattedText);
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  }, [noteText]);

  return (
    <div className="bg-gray-900 text-gray-200 h-screen flex flex-col font-sans">
      <header className="flex items-center justify-between p-4 border-b border-gray-700 sticky top-0 bg-gray-900/80 backdrop-blur-sm z-10">
        <div className="flex items-center space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <h1 className="text-xl font-bold text-gray-100">AI Note Formatter</h1>
        </div>
        <CleanUpButton isLoading={isLoading} onClick={handleCleanUp} />
      </header>
      
      <main className="flex-grow flex flex-col p-4 md:p-6 max-w-4xl mx-auto w-full">
        {error && (
            <div className="bg-red-900/50 border border-red-700 text-red-300 px-4 py-3 rounded-lg relative mb-4" role="alert">
                <strong className="font-bold">Error: </strong>
                <span className="block sm:inline">{error}</span>
            </div>
        )}
        
        <textarea
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          placeholder="Start typing your notes here..."
          className="w-full flex-grow bg-gray-800 text-gray-200 p-6 resize-none font-sans focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg"
          spellCheck="false"
          aria-label="Note editor"
        />
      </main>
    </div>
  );
};

export default App;