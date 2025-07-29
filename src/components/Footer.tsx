import React from "react";

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  return (
    <footer className={`text-center py-6 ${className}`}>
      <div className="max-w-md mx-auto">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          Want your own LinksForest?
        </p>
        <a
          href="https://github.com/antoniwan/links-forest/blob/main/SELF-HOSTING.md"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
        >
          <span>Get it for free →</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </footer>
  );
};
