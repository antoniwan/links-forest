import React from "react";
import packageJson from "../../package.json";

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  return (
    <footer className={`text-center py-8 ${className}`}>
      {/* Footer metadata section */}
      <div className="max-w-md mx-auto mt-8 pt-4 border-t border-gray-200 dark:border-gray-700 space-y-2">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Want your own LinksForest?
        </p>
        <a
          href="https://github.com/antoniwan/links-forest/blob/main/SELF-HOSTING.md"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
        >
          <span>Get it for free →</span>
          <svg
            className="w-3 h-3"
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
        <p className="text-xs text-gray-500 dark:text-gray-400">
          v{packageJson.version}
        </p>
      </div>
    </footer>
  );
};
