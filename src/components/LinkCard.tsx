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
    <motion.a
      href={href}
      className={`block p-6 rounded-lg border border-gray-200 dark:border-gray-700 
        bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow
        ${className}`}
      style={
        {
          "--accent-color": accentColor,
        } as React.CSSProperties
      }
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      {description && (
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          {description}
        </p>
      )}
    </motion.a>
  );
};
