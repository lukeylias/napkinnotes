import React from 'react';

const SparklesIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-7.19c0-1.767.96-3.364 2.52-4.14 1.234-.622 2.674-1.39 3.916-2.336a6.75 6.75 0 01-8.116-8.55zM3 7.5a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 013 7.5zM4.5 4.5a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5h-1.5zM6 12a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 016 12zM7.5 9a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5h-1.5z"
      clipRule="evenodd"
    />
  </svg>
);

export default SparklesIcon;
