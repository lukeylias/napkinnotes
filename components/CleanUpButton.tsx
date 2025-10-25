import React from 'react';
import SparklesIcon from './icons/SparklesIcon';
import SpinnerIcon from './icons/SpinnerIcon';

interface CleanUpButtonProps {
  isLoading: boolean;
  onClick: () => void;
}

const CleanUpButton: React.FC<CleanUpButtonProps> = ({ isLoading, onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className="flex items-center justify-center px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 disabled:bg-indigo-400 disabled:cursor-not-allowed transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500"
    >
      {isLoading ? (
        <>
          <SpinnerIcon className="w-5 h-5 mr-2" />
          <span>Cleaning...</span>
        </>
      ) : (
        <>
          <SparklesIcon className="w-5 h-5 mr-2" />
          <span>Clean Up Note</span>
        </>
      )}
    </button>
  );
};

export default CleanUpButton;
