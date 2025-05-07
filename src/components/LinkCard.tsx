import { motion } from "framer-motion";
import type { FC } from "react";

interface LinkCardProps {
  href: string;
  title: string;
  description?: string;
  accentColor?: string;
  className?: string;
}

export const LinkCard: FC<LinkCardProps> = ({
  href,
  title,
  description,
  accentColor = "rgb(59, 130, 246)", // default blue-500
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 10,
      }}
    >
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`block p-6 rounded-lg border border-gray-200 dark:border-gray-700 
          bg-white dark:bg-gray-800 shadow-sm ${className}`}
        style={
          {
            "--accent-color": accentColor,
          } as React.CSSProperties
        }
        whileHover={{
          scale: 1.05,
          boxShadow:
            "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        }}
        whileTap={{ scale: 0.98 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 10,
        }}
      >
        <div className="ring-1 ring-transparent hover:ring-[var(--accent-color)] transition-all duration-300 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
            {title}
          </h3>
          {description && (
            <p className="text-gray-600 dark:text-gray-200 text-sm">
              {description}
            </p>
          )}
        </div>
      </motion.a>
    </motion.div>
  );
};
