import React from 'react';
import packageJson from '../../package.json';

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <footer className={`py-8 text-center ${className}`}>
      {/* Footer metadata section */}
      <div className="mx-auto mt-8 max-w-md space-y-2 border-t border-gray-200 pt-4 dark:border-gray-700">
        <p className="text-xs text-gray-500 dark:text-gray-400">Want your own LinksForest?</p>
        <a
          href="https://github.com/antoniwan/links-forest/blob/main/SELF-HOSTING.md"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs text-gray-500 transition-colors duration-200 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
        >
          <span>Get it for free →</span>
          <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
        <p className="text-xs text-gray-500 dark:text-gray-400">v{packageJson.version}</p>
      </div>
    </footer>
  );
};
